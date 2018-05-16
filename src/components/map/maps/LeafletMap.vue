
<template>
  <div id="full_div" class="fullsize-map">
    <div id="map" class="map" @click="mapClicked"></div>
  </div>
</template>

<script>
  import BaseMap from './BaseMap';
  import * as L from 'leaflet';
  import CCUMapEventHub from "@/events/CCUMapEventHub";
  import Vue from 'vue';
  import supercluster from 'supercluster';

  L.Icon.Default.imagePath = '.';
  // OR
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  function createClusterIcon(feature, latlng) {
    if (!feature.properties.cluster) return L.marker(latlng);

    var count = feature.properties.point_count;
    var size =
      count < 100 ? 'small' :
        count < 1000 ? 'medium' : 'large';
    var icon = L.divIcon({
      html: '<div><span>' + feature.properties.point_count_abbreviated + '</span></div>',
      className: 'marker-cluster marker-cluster-' + size,
      iconSize: L.point(40, 40)
    });

    return L.marker(latlng, {icon: icon});
  }

  let index;

  export default {
    mixins: [BaseMap],
    data () {
      return {
        center: L.latLng(39, -90),
        zoom: 4,
        tileLayer:  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
        worksiteLayer: L.geoJson(null, {
          pointToLayer: createClusterIcon
        }),
        index: null
      }
    },
    mounted() {
      let options = {
        center: this.center,
        zoom: this.zoom
      };
      this.initMap(options);
      this.addCircle();
      // L.DomEvent.on(this.map, this.$listeners);
    },
    methods: {
      initMap(options) {
        this.map = L.map(this.$el, options);
        this.tileLayer.addTo(this.map);
        // this.map.on('click', this.mapClicked);
        this.map.on('moveend', this.updateCluster);
        this.worksiteLayer.addTo(this.map);
        this.initialLoadWorksites();

        this.worksiteLayer.on('click', (e) => {
          console.log(e);
          if (e.layer.feature.properties.cluster_id) {
            this.updateCluster(
              e.latlng,
              e.layer.feature.properties.cluster_id
            );
          }
        });

        CCUMapEventHub.$on('states-layer', (e) => {
          this.addStateBoundaries();
        });
      },
      addCircle() {
        let circle = L.circle([39, -90], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 20000
        }).addTo(this.map);
      },
      initialLoadWorksites() {
        const params = {
          'worksite__event': this.$store.state.worker.event.id
        };
        Vue.axios.get('/points', {params: params}).then(resp => {
          index = supercluster({
            log: true,
            radius: 50,
            maxZoom: 16
          }).load(resp.data.features);
          this.updateCluster();
        });
      },
      updateCluster(center=null, expansionZoom=null) {
        if (center && expansionZoom) {
          this.map.flyTo(center, index.getClusterExpansionZoom(expansionZoom));
        } else {
            if (index !== undefined) {
              const bounds = this.map.getBounds();
              const bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
              this.worksiteLayer.clearLayers();
              this.worksiteLayer.addData(index.getClusters(bbox, this.map.getZoom()))
            }
        }
      },
      addStateBoundaries() {
        function onEachFeature(feature, layer) {
          if (feature.properties  && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
        Vue.axios.get('/states').then(resp => {
          L.geoJSON(resp.data, {
            onEachFeature: onEachFeature
          }).addTo(this.map);
        });
      },
      mapClicked() {
        alert('Map clicked');

      }
    }
  }
</script>

<style>
  @import "~leaflet/dist/leaflet.css";

  body {
    margin: 0px;
  }

  .fullsize-map {
    height: 100%;
    width: 100%;
  }

  .marker-cluster-small {
    background-color: rgba(181, 226, 140, 0.6);
  }
  .marker-cluster-small div {
    background-color: rgba(110, 204, 57, 0.6);
  }

  .marker-cluster-medium {
    background-color: rgba(241, 211, 87, 0.6);
  }
  .marker-cluster-medium div {
    background-color: rgba(240, 194, 12, 0.6);
  }

  .marker-cluster-large {
    background-color: rgba(253, 156, 115, 0.6);
  }
  .marker-cluster-large div {
    background-color: rgba(241, 128, 23, 0.6);
  }

  .marker-cluster {
    background-clip: padding-box;
    border-radius: 20px;
  }
  .marker-cluster div {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;

    text-align: center;
    border-radius: 15px;
    font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
  .marker-cluster span {
    line-height: 30px;
  }
</style>

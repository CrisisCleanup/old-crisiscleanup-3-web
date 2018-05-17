<template>
  <div id="full_div" class="fullsize-map">
    <div id="map" class="map" @click="mapClicked">
      <WorksiteLayer v-if="ready" :map-object="map"/>
      <StateLayer v-if="ready" :map-object="map"/>
    </div>
  </div>
</template>

<script>
  import * as L from 'leaflet';
  import WorksiteLayer from './WorksiteLayer';
  import StateLayer from './StateLayer';
  import 'leaflet-loading'

  L.Icon.Default.imagePath = '.';
  // OR
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  export default {
    data() {
      return {
        ready: false,
        center: L.latLng(39, -90),
        zoom: 4,
        tileLayer: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      }
    },
    components: {
      WorksiteLayer,
      StateLayer
    },
    mounted() {
      let options = {
        center: this.center,
        zoom: this.zoom,
        loadingControl: true
      };
      this.initMap(options);
      this.addCircle();
      this.ready = true;
    },
    methods: {
      initMap(options) {
        this.map = L.map(this.$el, options);
        this.tileLayer.addTo(this.map);
        // this.map.on('click', this.mapClicked);
      },
      addCircle() {
        let circle = L.circle([39, -90], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 20000
        }).addTo(this.map);
      },
      mapClicked() {
        alert('Map clicked');
      }
    }
  }
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
  @import "~leaflet-loading/src/Control.Loading.css";

  body {
    margin: 0px;
  }

  .fullsize-map {
    height: 100%;
    width: 100%;
  }
</style>

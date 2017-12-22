<template>
  <div class="fullsize-map" style="position: relative;">
    <div id="floating-panel">
      <button class="btn-primary" @click="toggleHeatmap()">Toggle Heatmap</button>
      <!--<button @click="changeGradient()">Change gradient</button>-->
      <!--<button @click="changeRadius()">Change radius</button>-->
      <!--<button @click="changeOpacity()">Change opacity</button>-->
    </div>
    <gmap-map
      id="worker-map"
      :center="center"
      :zoom="zoomLevel"
      :options="options"
      style="width: 100%; height: 100%;"
      @click="mapIsClicked"
      @bounds_changed="mapBoundsChanged"
      @zoom_changed="setZoomLevel($event)"
      @dragstart="setDragging(true)"
      @dragend="setDragging(false)"
      ref="map"
    >
    </gmap-map>
  </div>
</template>

<script>

  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import CCUMapEventHub from '../../events/CCUMapEventHub';
  import MarkerClusterer from 'marker-clusterer-plus';
  import {loaded} from 'vue2-google-maps'
  import generateMarkerImagePath from './utils/markerImageManager';
  import DashboardEventHub from '@/events/DashboardEventHub';
  import {style as mapStyle} from './styles/snowOrange';
  import { mapState, mapMutations } from 'vuex';

  let lodashArray = require('lodash/array');
  let lodashCollection = require('lodash/collection');

  export default {
    data() {
      return {
        options: {
          scrollwheel: false,
          styles: mapStyle,
          fullscreenControl: false
        },
        heatmap: null,
        points: [],
        markers: []
      }
    },
    computed: mapState('map', {
      center: state => state.center,
      zoomLevel: state => state.zoomLevel,
      dragging: state => state.dragging,
      // markers: state => state.markers,
      bounds: state => state.bounds,
      tempMarkers: state => state.tempMarkers
    }),
    mounted() {
      loaded.then(() => {
        DashboardEventHub.$emit('open-aside', 'test');
        Vue.prototype.$map2 = () => {
          return this.$refs.map.$mapObject;
        };
        const eid = this.$store.state.worker.event.id;
        const lastViewport = this.$store.state.worker.mapViewingArea;
        this.$store.dispatch('map/getWorksites', eid).then((resp) => {
          this.renderMarkers(this.tempMarkers, lastViewport);
        });
      });
    },
    beforeDestroy: function () {
      const a = {
        center: this.center,
        zoom: this.zoomLevel
      };
      this.$store.commit('setMapViewingArea', a);
      this.$markerCluster.clearMarkers();
//      this.$overlay.setMap(null);
    },
    methods: {
      ...mapMutations('map', ['setZoomLevel', 'setDragging', 'setMarkers']),
      mapIsClicked() {
        CCUMapEventHub.$emit('map-is-clicked');
      },
      mapBoundsChanged(event) {
        const bounds = {
          minLon: event.b.b,
          minLat: event.f.b,
          maxLon: event.b.f,
          maxLat: event.f.f
        };
        this.$store.commit('map/setBounds', bounds);
      },
      draggingEnded(event) {
      },
      changeGradient() {
        const gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ];
        this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
      },
      changeRadius() {
        this.heatmap.set('radius', this.heatmap.get('radius') ? null : 20);
      },
      changeOpacity() {
        this.heatmap.set('opacity', this.heatmap.get('opacity') ? null : 0.2);
      },
      toggleHeatmap() {
        if (!this.heatmap) {
          this.heatmap = new google.maps.visualization.HeatmapLayer({
            data: this.points,
            map: this.$refs.map.$mapObject
          });
          this.heatmap.set('radius', 20);
        } else {
          this.heatmap.setMap(this.heatmap.getMap() ? null : this.$refs.map.$mapObject);
        }
      },
      renderMarkers(tempMarkers, lastViewport) {
        this.$markerCluster = new MarkerClusterer(
          this.$refs.map.$mapObject,
          []
        );

        const markerCallback = (marker, id) => {
          marker.addListener('click', (e) => {
            const googleMarker = {
              id: id,
              marker: marker
            };
            this.$refs.map.$mapObject.panTo(marker.getPosition());
            CCUMapEventHub.$emit('site-clicked', googleMarker);
            this.$store.dispatch('getSite', googleMarker.id);
          });
        };
        let points = [];
        let markers = tempMarkers.map((mark, i) => {
          const latLng = new google.maps.LatLng(mark.lat, mark.lng);
          points.push(latLng);
          let m = new google.maps.Marker({
            position: latLng,
            map: this.$refs.map.$mapObject,
            icon: generateMarkerImagePath(mark.claimed_by, mark.status, mark.work_type)
          });
          markerCallback(m, mark.id);
          return m;
        });
        this.points = points;
        this.$markerCluster.addMarkers(markers);
        this.markers = markers;

        this.$store.commit('map/setGetMarkersFunc', function() {
          return this.markers;
        })


//        this.zoomLevel = lastViewport.zoom;


      },
    }
  }
</script>

<style>
  #floating-panel {
    position: absolute;
    /*top: px;*/
    /*left: 50%;*/
    z-index: 5;
    /*background-color: #fff;*/
    padding: 5px;
    /*border: 1px solid #999;*/
    text-align: center;
    font-family: 'Roboto', 'sans-serif';
    line-height: 30px;
    padding-left: 10px;
    width: 10%;
    right: 0;
    margin: auto
  }

  .fullsize-map {
    height: 100%;
    width: 100%;
  }
</style>

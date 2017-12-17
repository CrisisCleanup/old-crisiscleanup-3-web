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
      @zoom_changed="zoomLevel = $event"
      @dragstart="dragging = true"
      @dragend="draggingEnded"
      ref="map"
    >
    </gmap-map>
  </div>
</template>
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

<script>

  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import CCUMapEventHub from '../../events/CCUMapEventHub';

  var lodashArray = require('lodash/array');
  var lodashCollection = require('lodash/collection');
  import MarkerClusterer from 'marker-clusterer-plus';
  import {DeferredReadyMixin} from 'vue2-google-maps/src/utils/deferredReady';
  import {loaded} from 'vue2-google-maps'
  import generateMarkerImagePath from './utils/markerImageManager';
  import DashboardEventHub from '@/events/DashboardEventHub';

  import {style as mapStyle} from './styles/snowOrange';



  export default {
    data() {
      return {
        siteId: 1,
        isPublicMap: false,
        isFormMap: false,
        zoomLevel: 5,
        mapTypeId: 1, // google.maps.MapTypeId.ROADMAP
        center: {
          lat: 39.0,
          lng: -90.0
        },
        options: {
          scrollwheel: false,
          styles: mapStyle,
          fullscreenControl: false
        },
        activeMarkers: [],
        dragging: false,
        waiting: false,
        markers: [],
        bounds: {
          minLon: null,
          minLat: null,
          maxLon: null,
          maxLat: null
        },
        heatmap: null,
        points: []
      }
    },
    mounted() {
      loaded.then(() => {
        DashboardEventHub.$emit('open-aside', 'test');
        Vue.prototype.$map2 = this.$refs.map.$mapObject;
        console.log('MOUNTING MAP')
        const eid = this.$store.state.worker.eventId;
        const lastViewport = this.$store.state.worker.mapViewingArea;
        this.pullSites(eid, lastViewport);
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
      mapIsClicked() {
        CCUMapEventHub.$emit('map-is-clicked');
      },
      mapBoundsChanged(event) {
        this.bounds.minLon = event.b.b;
        this.bounds.minLat = event.f.b;
        this.bounds.maxLon = event.b.f;
        this.bounds.maxLat = event.f.f;

      },
      draggingEnded(event) {
        /*
        if (this.zoomLevel >= 5 && !this.waiting) {
          this.waiting = true;
          this.renderSites(this.bounds);
          setTimeout(() => {
            this.waiting = false;
          }, 500);
        }
        */
      },
      pullSites(eventId, lastViewport) {
        const fields = "id,lat,lng,status,claimed_by_uid,work_type,city,reported_by_uid,name"
        const endpoint = `/worksites?legacy_event_id=${eventId}&fields=${fields}`
        this.$http.get(endpoint).then(response => {
          this.renderMarkers(response.data.results, lastViewport);
//          this.markers = [...this.markers, ...response.body.results];

        });

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
      renderMarkers(serverMarkers = [], lastViewport) {
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
        let markers = serverMarkers.map((mark, i) => {
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
        this.markers = markers;
        this.$markerCluster.addMarkers(markers);

//        this.zoomLevel = lastViewport.zoom;


      },
    }
  }
</script>

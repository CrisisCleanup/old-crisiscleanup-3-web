<template>
  <div class="fullsize-map" style="position: relative;">
    <div class="home-map" ref="map">
    </div>
    <!-- <div class="home-map" ref="map">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :options="options" :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="marker"></l-marker>
      </l-map>
    </div> -->
    <div id="floating-panel">
      <button class="btn-primary" v-show="!autoplay" @click="resumeAutoplay()">{{ $t('realtimeMap.resume_autoplay') }}</button>
    </div>
    <!--
    <div id="">
      <h3>View Current Events</h3>
      <button class="btn-primary">Hurricane Harvey</button>
      <button class="btn-primary">Hurricane Irma</button>
      <button class="btn-primary">Hurricane Nate</button>
    </div>
    -->
    <BannerCycler></BannerCycler>
    <MoreInfoButton/>
  </div>
</template>
<style>

  html, body {
    height: 100%;
    width: 100%;
  }

  .fullsize-map {
    height: 100vh;
    width: 100%;
  }

  #floating-panel {
    position: absolute;
    top: 60px;
    right: 5px;
    /*left: 50%;*/
    z-index: 999;
    /*background-color: #fff;*/
    padding: 5px;
    /*border: 1px solid #999;*/
    text-align: center;
    font-family: 'Roboto', 'sans-serif';
    line-height: 30px;
    padding-left: 10px;
    width: 10%;
    margin: auto
  }
</style>

<script>

  import Vue from 'vue';
  import * as L from 'leaflet';
  import generateMarkerImagePath from './utils/markerImageManager';
  import BannerCycler from './components/BannerCycler.vue';
  import MoreInfoButton from './components/MoreInfoButton.vue';
  import MarkerInfo from './utils/MarkerInfo.js';
  import 'leaflet-loading';
  import 'leaflet.gridlayer.googlemutant';
  import { mapGetters } from 'vuex';
  import CCUMapEventHub from '@/events/CCUMapEventHub';

  L.Icon.Default.imagePath = '.';
  // OR
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  export default {
    components: {
      BannerCycler,
      MoreInfoButton,
    },
    data() {
      return {
        ready: false,
        markers: [],
        points: [],
        autoplay: true,
        mapTimers: [],
        tileLayer: L.tileLayer('https://api.pitneybowes.com/location-intelligence/geomap/v1/tile/osm/{z}/{x}/{y}.png?api_key={api_key}', {
          api_key: process.env.PITNEYBOWES_API_KEY,
          maxZoom: 18,
          attribution: '<a target="_blank" href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>',
        }),
      };
    },
    computed: {
      ...mapGetters('map', ['getMapViewingArea']),
    },
    mounted() {
      const center = this.getMapViewingArea && this.getMapViewingArea.center;
      const zoom = this.getMapViewingArea && this.getMapViewingArea.zoom;
      const options = {
        center: center || L.latLng(39, -90),
        zoom: zoom || 4,
        loadingControl: true,
      };
      this.initMap(options);
      this.ready = true;
      CCUMapEventHub.$on('aside-changed', () => {
        setTimeout(() => { this.map.invalidateSize(); }, 400);
      });
    },
    // beforeDestroy: function () {
    //   for (var i = 0; i < this.mapTimers.length; i++) {
    //     clearTimeout(this.mapTimers[i]);
    //   }
    // },
    methods: {
      initMap(options) {
        this.map = L.map(this.$refs.map, options);
        this.tileLayer.addTo(this.map);

        // L.gridLayer.googleMutant({
        //   type: 'roadmap'
        // }).addTo(this.map);
        // this.map.on('click', this.mapClicked);
      },
      resumeAutoplay() {
        this.autoplay = true;
      },
      mapIsClicked() {
        this.autoplay = false;
      },
      draggingEnded() {
        this.autoplay = false;
      },
      // pullSites(eventId, lastViewport) {
      //   this.$http.get(`/worksites/realtime`).then(response => {
      //     this.renderMarkers(response.data.results, lastViewport);
      //   });
      // },
      checkAutoplay(m) {
        return () => {
          if (this.autoplay) {
            // this.$refs.map.$mapObject.setZoom(6);
            // this.$refs.map.$mapObject.panTo(m.getPosition());
          }
        };
      },
      // renderMarkers(serverMarkers = [], lastViewport) {
      //   var timer = 0;
      //   serverMarkers.forEach((mark, i) => {
      //     const t = setTimeout(() => {
      //       const latLng = new google.maps.LatLng(mark.lat, mark.lng);
      //       let m = new google.maps.Marker({
      //         position: latLng,
      //         map: this.$refs.map.$mapObject,
      //         icon: generateMarkerImagePath(mark.claimed_by, mark.status, mark.work_type),
      //         animation: google.maps.Animation.DROP
      //       });

      //       const translation = {
      //         helped_at: this.$t('realtimeMap.days_ago', { helpedAt: mark.helped_at }),
      //         city: this.$t('realtimeMap.in_city', { city: mark.city })
      //       }
      //       let contentString = MarkerInfo(mark, translation);

      //       var infowindow = new google.maps.InfoWindow({
      //         content: contentString
      //       });

      //       infowindow.open(this.$refs.map.$mapObject, m);
      //       var iw_container = $(".gm-style-iw").parent();
      //       iw_container.stop().hide();
      //       iw_container.fadeIn(1000);

      //       setTimeout(function () {
      //         infowindow.close();
      //       }, 4000);

      //       this.markers.push(m);

      //       this.checkAutoplay(m)();
      //     }, timer);
      //     timer += 5000;
      //     this.mapTimers.push(t);
      //   });
      // },
    },
  };
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
  @import "~leaflet-loading/src/Control.Loading.css";

  .home-map {
    height: 100%;
  }
  .leaflet-pane {
    z-index: 5;
  }
</style>

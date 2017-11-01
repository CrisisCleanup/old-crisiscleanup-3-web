<template>
  <div class="fullsize-map" style="position: relative;">
    <div id="floating-panel">
      <button class="btn-primary" v-show="!autoplay" @click="resumeAutoplay()">Resume Autoplay</button>
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
    <RealtimeMapFooter class="fixed-bottom"/>
    <gmap-map
      id="worker-map"
      :center="center"
      :zoom="zoomLevel"
      :options="options"
      style="width: 100%; height: 100%;"
      @click="mapIsClicked"
      @zoom_changed="zoomLevel = $event"
      ref="map"
      @dragstart="dragging = true"
      @dragend="draggingEnded"
    >
    </gmap-map>
  </div>
</template>
<style>

  html, body {
    height: 100%;
    width: 100%;
  }

  .fullsize-map {
    height: 100%;
    width: 100%;
  }

  #floating-panel {
    position: absolute;
    top: 60px;
    right: 5px;
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
    margin: auto
  }
</style>

<script>

  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import {loaded} from 'vue2-google-maps'
  import generateMarkerImagePath from './utils/markerImageManager';
  import {style as mapStyle} from './styles/snowOrange';
  import fadeInMarker from './utils/mapAnimations';
  import RealtimeMapFooter from './components/RealtimeMapFooter.vue';
  import BannerCycler from './components/BannerCycler.vue';
  import MoreInfoButton from './components/MoreInfoButton.vue';
  import MarkerInfo from './utils/MarkerInfo.js';

  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GOOGLE_MAPS_API_KEY,
      libraries: 'places,visualization'
    }
  });

  export default {
    components: {
      RealtimeMapFooter,
      BannerCycler,
      MoreInfoButton
    },
    data() {
      return {
        zoomLevel: 5,
        center: {
          lat: 39.0,
          lng: -90.0
        },
        options: {
          scrollwheel: false,
          styles: mapStyle,
          fullscreenControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: 2
          },
          scaleControl: true,
        },
        dragging: false,
        markers: [],
        bounds: {
          minLon: null,
          minLat: null,
          maxLon: null,
          maxLat: null
        },
        points: [],
        autoplay: true,
        mapTimers: []
      }
    },
    mounted() {
      loaded.then(() => {
        this.options = {
          scrollwheel: false,
          styles: mapStyle,
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.LEFT_CENTER
          },
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
          scaleControl: true,
        };
        const eid = this.$store.state.worker.eventId;
        const lastViewport = this.$store.state.worker.mapViewingArea;
        this.pullSites(eid, lastViewport);
      });
    },
    beforeDestroy: function () {
      for (var i = 0; i < this.mapTimers.length; i++) {
        clearTimeout(this.mapTimers[i]);
      }
    },
    methods: {
      resumeAutoplay() {
        this.autoplay = true;
      },
      mapIsClicked() {
        this.autoplay = false;
      },
      draggingEnded(event) {
        this.autoplay = false;
      },
      pullSites(eventId, lastViewport) {
        this.$http.get(`${process.env.API_ENDPOINT}/api/maps/realtime/`).then(response => {
          this.renderMarkers(response.body.results, lastViewport);
        });
      },
      checkAutoplay(m) {
        return () => {
          if (this.autoplay) {
            this.$refs.map.$mapObject.setZoom(6);
            this.$refs.map.$mapObject.panTo(m.getPosition());
          }
        }
      },
      renderMarkers(serverMarkers = [], lastViewport) {
        var timer = 0;
        serverMarkers.forEach((mark, i) => {
          const t = setTimeout(() => {
            const latLng = new google.maps.LatLng(mark.lat, mark.lng);
            let m = new google.maps.Marker({
              position: latLng,
              map: this.$refs.map.$mapObject,
              icon: generateMarkerImagePath(mark.claimed_by, mark.status, mark.work_type),
              animation: google.maps.Animation.DROP
            });

            var contentString = MarkerInfo(mark);
            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });

            infowindow.open(this.$refs.map.$mapObject, m);
            var iw_container = $(".gm-style-iw").parent();
            iw_container.stop().hide();
            iw_container.fadeIn(1000);

            setTimeout(function () {
              infowindow.close();
            }, 4000);

            this.markers.push(m);

            this.checkAutoplay(m)();
          }, timer);
          timer += 5000;
          this.mapTimers.push(t);
        });
      },
    }
  }
</script>

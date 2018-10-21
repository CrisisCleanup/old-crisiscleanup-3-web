<template>
  <div id="full_div" class="fullsize-map">
    <div id="map" class="map" @click="mapClicked">
      <WorksiteLayer v-if="ready" :map-object="map"/>
      <StateLayer v-if="ready" :map-object="map"/>
      <CountryLayer v-if="ready" :map-object="map"/>
      <CountyLayer v-if="ready" :map-object="map"/>
      <EventBoundaryLayer v-if="ready" :map-object="map"/>
    </div>
  </div>
</template>

<script>
  import * as L from 'leaflet';
  import WorksiteLayer from './WorksiteLayer';
  import StateLayer from './StateLayer';
  import CountryLayer from './CountryLayer';
  import CountyLayer from './CountyLayer';
  import EventBoundaryLayer from './EventBoundaryLayer';
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
    data() {
      return {
        ready: false,
        tileLayer: L.tileLayer('https://api.pitneybowes.com/location-intelligence/geomap/v1/tile/osm/{z}/{x}/{y}.png?api_key={api_key}', {
          api_key: process.env.PITNEYBOWES_API_KEY,
          maxZoom: 18,
          attribution: '<a class="leaflet-attribution" target="_blank" href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>',
        }),
      };
    },
    components: {
      EventBoundaryLayer,
      WorksiteLayer,
      StateLayer,
      CountryLayer,
      CountyLayer,
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
      this.addCircle();
      this.ready = true;
      CCUMapEventHub.$on('aside-changed', () => {
        setTimeout(() => { this.map.invalidateSize(); }, 400);
      });
    },
    methods: {
      initMap(options) {
        this.map = L.map(this.$el, options);
        this.tileLayer.addTo(this.map);

        window.maps = [this.map];
      },
      addCircle() {
        L.circle([39, -90], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 20000,
        }).addTo(this.map);
      },
      mapClicked() {
        alert('Map clicked');
      },
    },
  };
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

<template>
  <div>
    <WorkerMap :map-impl="mapImpl"/>
  </div>
</template>

<script>
  import WorkerMap from '@/components/map/WorkerMap.vue';
  import DashboardEventHub from '@/events/DashboardEventHub';

  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GOOGLE_MAPS_API_KEY,
      libraries: 'places,visualization'
    }
  });

  export default {
    name: 'WorkerMapView',
    props: {
      mapImpl: {
        type: String,
        default: 'leaflet-map'
      }
    },
    components: {
      WorkerMap
    },
    beforeRouteLeave (to, from, next) {
      DashboardEventHub.$emit('close-aside', 'test');
      next(true);
    }
  }
</script>

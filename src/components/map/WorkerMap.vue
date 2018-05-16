<template>
  <div class="fullsize-map">
    <component :is="mapImpl"></component>
  </div>
</template>
<script>
  import GoogleMap from './maps/GoogleMap.vue';
  import LeafletMap from './maps/LeafletMap';

  export default {
    props: {
      mapImpl: {
        type: String,
        default: 'leaflet-map'
      }
    },
    name: 'WorkerMap',
    components: {
      GoogleMap,
      LeafletMap
    },
    data() {
      return {
      }
    },
  }
</script>
<style>
  .fullsize-map {
    height: 100%;
    width: 100%;
  }
</style>

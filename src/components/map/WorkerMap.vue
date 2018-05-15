<template>
  <div class="fullsize-map">
    <component :is="currentMap"></component>
  </div>
</template>
<script>
  import GoogleMap from './maps/GoogleMap.vue';
  import LeafletMap from './maps/LeafletMap';

  export default {
    name: 'WorkerMap',
    components: {
      GoogleMap,
      LeafletMap
    },
    data() {
      return {
        currentMap: 'leaflet-map'
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

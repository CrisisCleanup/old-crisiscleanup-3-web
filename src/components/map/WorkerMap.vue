<template>
  <div class="fullsize-map">
    <component :is="mapImpl"></component>
  </div>
</template>
<script>
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

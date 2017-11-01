<template>
  <div class="fullsize-map">
    <WorkerCCUMap></WorkerCCUMap>
  </div>
</template>
<script>
  import CCUMapEventHub from '../../events/CCUMapEventHub';
  import WorkerCCUMap from './WorkerCCUMap.vue';

  export default {
    name: 'WorkerMap',
    components: {
      WorkerCCUMap,
    },
    data() {
      return {
        showInfoBox: false
      }
    },
    mounted: function () {
      CCUMapEventHub.$on('site-clicked', (e) => {
        this.showInfoBox = true;
        // filters anchor
        // Show filters
      });
      CCUMapEventHub.$on('close-infobox', () => {
        this.showInfoBox = false;
        // filters anchor
        // Show filters
      });
    },
  }
</script>
<style>
</style>

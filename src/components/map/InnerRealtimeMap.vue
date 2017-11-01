<template>
  <div class="fullsize-map">
    <RealtimeMap></RealtimeMap>
  </div>
</template>
<script>
  import RealtimeMap from './RealtimeMap.vue';

  export default {
  name: 'InnerRealtimeMap',
    components: {
      RealtimeMap,
    },
    data() {
      return {
      }
    },
    mounted: function () {
    },
  }
</script>

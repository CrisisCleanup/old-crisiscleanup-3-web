<template>
  <div>
    <WorkerMap :map-impl="mapImpl"/>
  </div>
</template>

<script>
  import WorkerMap from '@/components/map/WorkerMap.vue';
  import DashboardEventHub from '@/events/DashboardEventHub';

  import Vue from 'vue';

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

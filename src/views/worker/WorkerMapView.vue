<template>
  <div>
    <WorkerMap/>
  </div>
</template>

<script>
  import WorkerMap from '@/components/map/WorkerMap.vue';
  import DashboardEventHub from '@/events/DashboardEventHub';

  export default {
    name: 'WorkerMapView',
    components: {
      WorkerMap
    },
    beforeRouteLeave (to, from, next) {
      console.log('CLOSING MAP')
      DashboardEventHub.$emit('close-aside', 'test');
      next(true);
    }
  }
</script>

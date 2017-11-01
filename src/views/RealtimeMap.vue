<template>
  <div>
    <InnerRealtimeMap id="go-realtimemap"/>
    <Donation/>
    <PoweredBy/>
    <WhyCrisisCleanup/>
  </div>
</template>

<script>
  import InnerRealtimeMap from '../components/map/InnerRealtimeMap.vue';
  import Donation from './home/Donation.vue';
  import PoweredBy from './home/PoweredBy.vue';
  import WhyCrisisCleanup from './home/WhyCrisisCleanup.vue';

  export default {
    name: 'RealtimeMap',
    components: {
      InnerRealtimeMap,
      Donation,
      PoweredBy,
      WhyCrisisCleanup
    }
  }
</script>

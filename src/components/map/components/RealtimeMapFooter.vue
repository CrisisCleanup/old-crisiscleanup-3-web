<template>
  <div id="realtime-map-footer" class="row row justify-content-center">
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.orgCount"></StatOdometer>  Organizations
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.requests"></StatOdometer>  Requests for Help
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.completed"/>  Completed
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.working"/>  Open and Working
      </div>
    </div>
  </div>
</template>
<script>

  import StatOdometer from './StatOdometer.vue';
  import { mapGetters } from 'vuex';

  export default {
    props: [],
    data() {
      return {
      }
    },
    components: {
      StatOdometer
    },

    computed: {
      ...mapGetters([
        'getRealtimeStats'
      ])
    },

    mounted() {
      this.$store.dispatch('getRealtimeStats');
      // setInterval(() => {this.getData()}, 30000);
    },

    methods: {
    }
  }
</script>
<style>
  #realtime-map-footer {
    font-size: 22px;
    background-color: #333;
    color: white;
    z-index: 5;
  }
</style>

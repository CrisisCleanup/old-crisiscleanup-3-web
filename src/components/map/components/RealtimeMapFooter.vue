<template>
  <div id="realtime-map-footer" class="row row justify-content-center">
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.orgCount"></StatOdometer>  {{ $t('realtimeMapFooter.organizations') }}
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.requests"></StatOdometer>  {{ $t('realtimeMapFooter.requests_help') }}
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.completed"/>  {{ $t('realtimeMapFooter.completed') }}
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="getRealtimeStats.working"/>  {{ $t('realtimeMapFooter.in_progress') }}
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

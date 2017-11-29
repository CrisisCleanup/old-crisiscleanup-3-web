<template>
  <div id="realtime-map-footer" class="row row justify-content-center">
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="orgCount"></StatOdometer>  Organizations
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="requests"></StatOdometer>  Requests for Help
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="completed"/>  Completed
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="text-center">
        <StatOdometer starting-value="1" :total="working"/>  Open and Working
      </div>
    </div>
  </div>
</template>
<script>

  import StatOdometer from './StatOdometer.vue';

  export default {
    props: [],
    data() {
      return {
        orgCount: 1,
        requests: 1,
        completed: 1,
        working: 1

      }
    },
    components: {
      StatOdometer
    },

    mounted() {
      this.getData();
      setInterval(() => {this.getData()}, 30000);
    },
    methods: {
      getData() {
        this.$http.get(`${process.env.API_ENDPOINT}/stats/realtime-ticker`).then(r => {
          this.orgCount = r.body.org_count;
          this.requests = r.body.worksite_count;
          this.completed = r.body.worksite_statuses['Closed, completed'];
          this.completed += r.body.worksite_statuses['Closed, done by others'];
          this.working = r.body.worksite_statuses['Open, assigned'];
          this.working += r.body.worksite_statuses['Open, partially completed'];
        });
      }
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

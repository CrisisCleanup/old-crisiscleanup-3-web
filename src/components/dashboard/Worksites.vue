<template>
  <div>
    <div class="card" style="margin-bottom: 0.5rem;">
      <div class="card-header">
        <div class="row">
          <div class="col-8">
            <h5>Your Claimed Worksites</h5>
          </div>
          <div class="col-4">
            <div class="text-md-right lead">
              <a class="btn btn-outline-secondary prev hand-pointer" @click="previousDashboardWorksites"
                 title="go back"><i class="fa fa-lg fa-chevron-left"></i></a>
              <a class="btn btn-outline-secondary next hand-pointer" @click="nextDashboardWorksites" title="more"><i
                class="fa fa-lg fa-chevron-right"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <v-loading loader="getDashboardWorksites">
      <template slot='spinner'>
        <div class="d-flex d-column justify-content-center align-items-center">
            <pulse-loader :size="'90px'"></pulse-loader>
        </div>
      </template>
      <div class="row equal-height">
        <div class="col-12 col-md-6">
          <work-site :key="site.id" v-for="site in sitesCol1" :siteData="site"></work-site>
        </div>
        <div class="col-12 col-md-6">
          <work-site :key="site.id" v-for="site in sitesCol2" :siteData="site"></work-site>
        </div>
      </div>
    </v-loading>
  </div>
</template>

<script>
  import WorkSite from '../sites/WorkSite.vue';
  import {mapActions, mapGetters} from 'vuex';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  export default {
    name: 'worksites',
    computed: {
      sitesCol1() {
        return this.$store.getters.getDashboardWorksites.worksites.slice(0, 2);
      },
      sitesCol2() {
        return this.$store.getters.getDashboardWorksites.worksites.slice(2, 4);
      },
      ...mapGetters('loading', ['isLoading', 'anyLoading'])
    },
    mounted() {
      this.getDashboardWorksites();
    },
    components: {
      WorkSite,
      PulseLoader
    },
    methods: {
      ...mapActions([
        'getDashboardWorksites',
        'nextDashboardWorksites',
        'previousDashboardWorksites'
      ])
    }
  }
</script>

<style scoped>
  .row.equal-height {
    display: flex;
    flex-wrap: wrap;
  }

  .row.equal-height > [class*='col-'] {
    display: flex;
    flex-direction: column;
  }

  .card {
    flex: 1;
  }

  .hand-pointer {
    cursor: pointer;
  }
</style>

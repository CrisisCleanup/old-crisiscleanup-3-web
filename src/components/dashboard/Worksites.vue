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
              <a class="btn btn-outline-secondary prev hand-pointer" @click="previousDashboardWorksites" title="go back"><i class="fa fa-lg fa-chevron-left"></i></a>
              <a class="btn btn-outline-secondary next hand-pointer" @click="nextDashboardWorksites" title="more"><i
                class="fa fa-lg fa-chevron-right"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="row equal-height">
      <div class="col-12 col-md-6">
        <work-site :key="site.id" v-for="site in sitesCol1" :siteData="site"></work-site>
      </div>
      <div class="col-12 col-md-6">
        <work-site :key="site.id" v-for="site in sitesCol2" :siteData="site"></work-site>
      </div>
    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
  import WorkSite from '../sites/WorkSite.vue';
  import {mapActions} from 'vuex';
  import Vue from 'vue';

  export default {
    name: 'worksites',
    computed: {
      sitesCol1() {
        return this.$store.getters.getDashboardWorksites.worksites.slice(0, 2);
      },
      sitesCol2() {
        return this.$store.getters.getDashboardWorksites.worksites.slice(2, 4);
      }
    },
    mounted() {
      this.getDashboardWorksites();
    },
    components: {
      WorkSite
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

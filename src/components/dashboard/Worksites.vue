<!--
<template>
  <div>
    <div class="card" style="margin-bottom: 0.5rem;">
      <div class="card-header">
        <div class="row">
          <div class="col-8">
            <h5>{{ $t('worksites.your_claimed_worksites') }}</h5>
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
            <grid-loader :size="'90px'" :color="'white'"></grid-loader>
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
  import GridLoader from "vue-spinner/src/GridLoader.vue";

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
      GridLoader,
      WorkSite,
      GridLoader
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
-->

<template>
  <div class="animated">
    <div class="card">
      <div class="card-body">

        <div class="row">
          <div class="col-md-2">
            <button type="button" class="btn btn-primary btn-block"
                      @click="() => {changeFilterOpenClose('Open'); changeFilterStatus('assigned')}">Open
            </button>
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-primary btn-block"
                      @click="() => {changeFilterOpenClose('Closed'); changeFilterStatus('completed')}">Closed
            </button>
        </div>
        </div>

        <div class="row">
          <div class="col-md-3">

            <ul v-if="filterOpenClose=='Open'" class="list-group list-group-flush">
              <li class="list-group-item">
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('assigned')">Assigned
                </button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('partially completed')">Partially
                  Completed
                </button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('needs follow-up')">Need Follow Up
                </button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('unassigned')">Unassigned
                </button>
              </li>
              <li class="list-group-item">
              </li>
            </ul>

            <ul v-else class="list-group list-group-flush">
              <li class="list-group-item">
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('completed')">Completed</button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('incomplete')">Incomplete</button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('out of scope')">Out of Scope</button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('done by others')">Done by Others</button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('no help wanted')">No Help Wanted</button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('rejected')">Rejected</button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-primary btn-block" @click="changeFilterStatus('duplicate')">Duplicate</button>
              </li>
              <li class="list-group-item">
              </li>
            </ul>
          </div>
          <div class="col-md-9">
            <DashboardWorksiteDatatable :filter-status="filterStatus"
                                        :filter-open-close="filterOpenClose">
            </DashboardWorksiteDatatable>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import WorkSite from '../sites/WorkSite.vue';
  import {mapActions, mapGetters} from 'vuex';
  import GridLoader from "vue-spinner/src/GridLoader.vue";
  import DashboardWorksiteDatatable from '@/components/datatables/DashboardWorksiteDatatable.vue'

  export default {
    name: 'worksites',
    data() {
      return {
        filterOpenClose: 'Open',
        filterStatus: 'assigned'
      }
    },

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
      GridLoader,
      WorkSite,
      DashboardWorksiteDatatable
    },
    methods: {
      changeFilterOpenClose(status) {
        this.filterOpenClose = status;
      },

      changeFilterStatus(status) {
        this.filterStatus = status;
      },

      ...mapActions([
        'getDashboardWorksites',
        'nextDashboardWorksites',
        'previousDashboardWorksites'
      ])
    }
  }
</script>

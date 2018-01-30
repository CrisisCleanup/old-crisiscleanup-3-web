<template>
  <b-card :class="cardColorClass" :no-block="true">
    <div class="card-body pb-0">
      <v-loading loader="getWorksiteStats">
        <template slot='spinner'>
          <pulse-loader :color="'white'"></pulse-loader>
        </template>
        <b-dropdown class="float-right" variant="transparent p-0" right>
          <template slot="button-content">
            <i class="icon-settings"></i>
          </template>
          <b-dropdown-item>{{ $t('actions.details') }}</b-dropdown-item>
          <b-dropdown-item>{{ $t('actions.download') }}</b-dropdown-item>
          <b-dropdown-item>{{ $t('actions.print') }}</b-dropdown-item>
          <!--<b-dropdown-item disabled>{{ $t('actions.choose_one_select') }}</b-dropdown-item>-->
        </b-dropdown>
        <h4 id="statQuantityId" class="mb-0">{{ statQuantity }}</h4>
        <p id="statNameId">{{ statName }}</p>
      </v-loading>
    </div>
    <!--<component :is="chartComponent" class="chart-wrapper px-3" style="height:50px;" height="50"></component>-->
  </b-card>
</template>

<script>
  import CardLine1ChartExample from '@/views/dashboard/CardLine1ChartExample'
  import CardLine3ChartExample from '@/views/dashboard/CardLine3ChartExample'
  import {mapGetters} from 'vuex';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  export default {
    props: [
      'statName',
      'statQuantity',
      'cardColorClass',
      'chartComponent'
    ],
    computed: {
      ...mapGetters('loading', ['isLoading', 'anyLoading'])
    },
    mounted() {
    },
    components: {
      CardLine1ChartExample,
      CardLine3ChartExample,
      PulseLoader
    }
  }
</script>

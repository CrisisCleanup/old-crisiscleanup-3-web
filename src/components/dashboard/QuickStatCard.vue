<template>
  <b-card :class="cardColorClass" :no-block="true">
    <div class="card-body pb-0">
      <b-dropdown class="float-right" variant="transparent p-0" right>
        <template slot="button-content">
          <i class="icon-settings"></i>
        </template>
        <b-dropdown-item>Action</b-dropdown-item>
        <b-dropdown-item>Another action</b-dropdown-item>
        <b-dropdown-item>Something else here...</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
      <h4 class="mb-0">{{ statQuantity }}</h4>
      <p>{{ statName }}</p>
    </div>
    <!--<component :is="chartComponent" class="chart-wrapper px-3" style="height:50px;" height="50"></component>-->
  </b-card>
</template>

<script>
  import Vue from 'vue';
  import CardLine1ChartExample from '@/views/dashboard/CardLine1ChartExample'
  import CardLine3ChartExample from '@/views/dashboard/CardLine3ChartExample'

  export default {
    props: [
      'statName',
      'statQuantity',
      'cardColorClass',
      'chartComponent'
    ],
    mounted() {},
    components: {
      CardLine1ChartExample,
      CardLine3ChartExample,
    }
  }
</script>

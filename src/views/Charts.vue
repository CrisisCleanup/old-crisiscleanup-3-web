<template>
  <div class="animated fadeIn">
    <div class="card-columns cols-2">
      <b-card v-bind:header = "$t('charts.line_chart')">
        <div class="chart-wrapper">
          <line-example/>
        </div>
      </b-card>
      <b-card v-bind:header = "$t('charts.bar_chart')">
        <div class="chart-wrapper">
          <bar-example/>
        </div>
      </b-card>
      <b-card v-bind:header = "$t('charts.doughnut_chart')">
        <div class="chart-wrapper">
          <doughnut-example/>
        </div>
      </b-card>
      <b-card v-bind:header = "$t('charts.radar_chart')">
        <div class="chart-wrapper">
          <radar-example/>
        </div>
      </b-card>
      <b-card v-bind:header = "$t('charts.pie_chart')">
        <div class="chart-wrapper">
          <pie-example/>
        </div>
      </b-card>
      <b-card v-bind:header = "$t('charts.polar_area_chart')">
        <div class="chart-wrapper">
          <polar-area-example/>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import BarExample from './charts/BarExample'
import LineExample from './charts/LineExample'
import DoughnutExample from './charts/DoughnutExample'
import RadarExample from './charts/RadarExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample
  }
}
</script>

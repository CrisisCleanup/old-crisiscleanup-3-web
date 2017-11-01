<template>
  <div class="odometer" ref="od"></div>
</template>
<script>

  import Odometer from 'odometer';
  import 'odometer/themes/odometer-theme-train-station.css';

  export default {
    props: [
      'startingValue',
      'total'
    ],
    data() {
      return {
        od: null
      }
    },
    mounted () {
      this.od = new Odometer({
        el: this.$refs.od,
        value: this.startingValue,
        format: '',
        theme: 'train-station',
        animation: 'count'
      });
      setTimeout(() => {
        this.od.update(this.total);
      }, 1000);
    },
    watch: {
      total: function (val) {
        this.od.update(this.total);
      }
    }
  }
</script>

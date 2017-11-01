<template>
  <div class="row" id="realtime-map-downarrow" style="width: 200px;">
    <div class="col-12">
        <span style="text-align: center;">
        <i class="fa fa-angle-down" style="font-size: 120px;"></i>
        </span>
    </div>
  </div>
</template>
<script>
  export default {
    props: [],
    mounted() {

    }
  }
</script>
<style scoped>
  #realtime-map-downarrow {
    position: absolute;
    color: #41B7D8;
    left: 50%;
    bottom: 20px;
    margin: auto;
    margin-left: -50px;
    z-index: 5;
  }
</style>

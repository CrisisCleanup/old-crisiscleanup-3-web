<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    localStorage.removeItem('vuex');
  }
}
</script>

<style lang="scss">
  $fa-font-path: "~font-awesome/fonts/";
  @import "~font-awesome/css/font-awesome.css";
  $simple-line-font-path: "~simple-line-icons/fonts/";
  @import "~simple-line-icons/css/simple-line-icons.css";
</style>
<style lang="scss">
  // Import Main styles for this application
  @import "./scss/style";
</style>

<template>
  <div class="fullsize-map">
    <notifications group="core" />
    <PublicHeader/>
    <router-view></router-view>
    <AppFooter class="public-footer"/>
  </div>
</template>

<style type="text/css">
  .public-footer {
    margin: 0 !important;
  }
</style>

<script>
import AppFooter from '@/components/Footer';
import PublicHeader from '@/components/PublicHeader';

export default {
  name: 'main',
  components: {
    PublicHeader,
    AppFooter,
  },
  data () {
    return {
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>

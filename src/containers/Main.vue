<template>
  <div class="fullsize-map">
    <notifications group="foo" />
    <PublicHeader/>
    <router-view class="fullsize-map"></router-view>
    <!--<LargeFooter/>-->
  </div>
</template>

<script>
import LargeFooter from '@/components/LargeFooter';
import PublicHeader from '@/components/PublicHeader';

export default {
  name: 'main',
  components: {
    PublicHeader,
    LargeFooter,
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

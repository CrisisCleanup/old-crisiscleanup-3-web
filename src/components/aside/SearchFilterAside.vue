<template>
  <div>
    <Callout class="m-0 py-2 text-muted bg-light text-uppercase">
      <small><b>Search</b></small>
    </Callout>
    <div class="container" style="padding-top: 10px;">
      <Search />
    </div>
  </div>
</template>

<script>
  import Search from './search/Search';
  import Callout from '@/components/Callout';

  export default {
    name: 'SearchFilterAside',
    components: {
      Search,
      Callout
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {
    },
    methods: {}
  }
</script>

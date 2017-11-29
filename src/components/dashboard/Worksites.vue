<template>
  <div>
    <div class="card-columns">
      <work-site :key="site.id" v-for="site in sites" :siteData="site"></work-site>
    </div>
  </div>
</template>

<script>
  import WorkSite from '../sites/WorkSite.vue';
  import { mapActions } from 'vuex';
  import Vue from 'vue';

  export default {
    name: 'worksites',
    computed: {
      sites() {
        return this.$store.getters.getWorksites;
      }
    },
    mounted() {},
    components: {
      WorkSite
    },
    methods: {
      ...mapActions(['getWorksites'])
    }
  }
</script>

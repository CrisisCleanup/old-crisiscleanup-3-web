<template>
  <div>
    <WorksiteControls class="p-2" style="position:fixed; width: 100%; height: 90px;"></WorksiteControls>
    <div class="container-fluid" style="padding-top: 100px;">
      <!--<component :is="activeWorksiteAside"></component>-->
      <IntakeFormAside v-if="activateEditWorksite"></IntakeFormAside>
      <SearchFilterAside v-if="activateSearchFilter"></SearchFilterAside>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import WorksiteControls from './WorksiteControls.vue';
  import IntakeFormAside from './IntakeFormAside';
  import SearchFilterAside from './SearchFilterAside';

  export default {
    name: 'WorksiteAside',
    components: {
      WorksiteControls,
      IntakeFormAside,
      SearchFilterAside
    },
    computed: {

      activateEditWorksite() {
        return this.$store.getters.getWorksiteViews.editWorksite;
      },
      activateSearchFilter() {
        return this.$store.getters.getWorksiteViews.searchFilter;
      }
    },
    methods: {}
  }
</script>

<style>
  .pac-container {
    z-index: 1051 !important;
  }
</style>

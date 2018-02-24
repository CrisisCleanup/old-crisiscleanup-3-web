<template>
  <div>
    <div style="position:fixed; width: 100%; height: 90px; background-color: white; z-index: 100; box-shadow:0px 3px 3px grey;">
    <Callout class="m-0 py-2 text-muted bg-light text-uppercase">
      <small><b>Create Worksite</b></small>
    </Callout>
    <WorksiteControls class="p-2" ></WorksiteControls>
    </div>
    <div class="container-fluid" style="padding-top: 105px;">
      <!--<component :is="activeWorksiteAside"></component>-->
      <!--<IntakeFormAside v-if="activateEditWorksite"></IntakeFormAside>-->
      <EventForm v-if="activateEditWorksite" />
    </div>
  </div>
</template>

<script>
  import WorksiteControls from './WorksiteControls.vue';
  import IntakeFormAside from './IntakeFormAside';
  import Callout from '@/components/Callout';
  import EventForm from '@/components/form/EventForm';

  export default {
    name: 'WorksiteAside',
    components: {
      WorksiteControls,
      IntakeFormAside,
      Callout,
      EventForm
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

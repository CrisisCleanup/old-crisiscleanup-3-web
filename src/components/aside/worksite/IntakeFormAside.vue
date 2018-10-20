<template>
  <div>
    <v-loading loader="getSite">
      <template slot='spinner'>
        <div class="row">
          <div class="col">
            <pulse-loader></pulse-loader>
          </div>
        </div>
      </template>
      <div class="row">
        <div class="col">
          <ul v-show="Object.keys(legacy_site).length === 0">
            <li>Claimed By: {{legacy_site.claimed_by_uid}}</li>
          </ul>
          <div v-show="Object.keys(siteFormErrors).length !== 0" class="alert alert-danger" role="alert">
            <ul>
              <li v-for="(val, key) in siteFormErrors">{{ key }}: {{ val[0] }}</li>
            </ul>
          </div>
          <form>
            <EventForm :site-form-errors="siteFormErrors"
                       v-on:formReady="fireFormReady" ref="eventFormBase"></EventForm>
            <div v-if="isFormReady">
            </div>
          </form>
        </div>
      </div>
      <br/>
      <br/>
    </v-loading>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
  import { output } from './irma2.js';

  const EventForm = Vue.component('EventForm', (resolve) => {
    setTimeout(() => {
      resolve({
        template: `<div>${output}</div>`,
        props: ['siteFormErrors'],
        computed: {
          legacy_legacy_site: {
            get() {
              return this.$store.getters.getCurrentSiteData;
            },
          },
          ...mapGetters('loading', ['isLoading', 'anyLoading']),
        },
        mounted() {
          this.$emit('formReady');
        },
        methods: {
          updateValue(e) {
            const { id } = e.target;
            const fieldId = id.replace('legacy_legacy_site_', '');
            const currentSiteData = Object.assign({}, this.$store.getters.getCurrentSiteData);
            currentSiteData[fieldId] = e.target.value;
            this.$store.commit('setCurrentSiteData', currentSiteData);
          },
        },
      });
    }, 1000);
  });

  export default {
    name: 'IntakeFormAside',
    components: {
      EventForm,
      PulseLoader,
    },
    data() {
      return {
        isFormReady: false,

      };
    },
    computed: {
      legacy_site: {
        get() {
          return this.$store.getters.getCurrentSiteData;
        },
      },
      isSiteClaimed() {
        return this.$store.getters.isCurrentSiteClaimed;
      },
      isCurrentSiteClaimedByUserOrg() {
        return this.$store.getters.isCurrentSiteClaimedByUserOrg;
      },
      siteFormErrors() {
        return this.$store.getters.getSiteFormErrors;
      },
    },
    mounted() {
    },
    methods: {
      updateSiteData(obj) {
        const currentSiteData = Object.assign({}, this.$store.getters.getCurrentSiteData, obj);
        this.$store.commit('setCurrentSiteData', currentSiteData);
      },
      fireFormReady() {
        this.isFormReady = true;
      },
      saveForm() {
        this.$store.dispatch('saveSite');
      },
      saveAndClaim() {
      },
      cancel() {

      },
    },
  };
</script>

<style>
  .pac-container {
    z-index: 1051 !important;
  }
</style>

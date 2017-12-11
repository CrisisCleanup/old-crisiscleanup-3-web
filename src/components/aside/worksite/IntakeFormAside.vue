<template>
  <div>
    <WorksiteControls class="p-2" style="position:fixed; width: 100%; height: 55px;"></WorksiteControls>
    <div class="container-fluid" style="padding-top: 75px;">
      <div class="row">
        <div class="col">
            <button type="button" @click="saveForm" id="save-btn-top" class="btn btn-primary">Save</button>
            <button type="button" @click="saveAndClaim" id="save-claim-btn-top" class="btn btn-primary"
                    v-show="isCurrentSiteClaimedByUserOrg || !isSiteClaimed"
                    v-text="isSiteClaimed ? 'Save & Unclaim' : 'Save & Claim'"></button>
            <button type="button" @click="cancel" id="cancel-btn-top" class="btn btn-primary">Cancel</button>
            <div v-show="Object.keys(siteFormErrors).length !== 0" class="alert alert-danger" role="alert">
              <ul>
                <li v-for="(val, key) in siteFormErrors">{{ key }}: {{ val[0] }}</li>
              </ul>
            </div>
          <form>


            <EventForm :legacy_legacy_site="legacy_site" :site-form-errors="siteFormErrors" v-on:formReady="fireFormReady"></EventForm>
            <div v-if="isFormReady">
              <button type="button" id="save-btn-bottom" @click="saveForm" class="btn btn-primary">Save</button>
              <button type="button" id="save-claim-btn-bottom" @click="saveAndClaim" class="btn btn-primary"
                      v-show="isCurrentSiteClaimedByUserOrg || !isSiteClaimed"
                      v-text="isSiteClaimed ? 'Save & Unclaim' : 'Save & Claim'"></button>
              <button type="button" @click="cancel" class="btn btn-primary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>
  import {output} from './irma2.js';
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import WorksiteControls from './WorksiteControls.vue';

  const EventForm = Vue.component('EventForm', function (resolve, reject) {
    setTimeout(function () {
      resolve({
        template: '<div>' + output + '</div>',
        props: ['legacy_legacy_site', 'siteFormErrors'],
        mounted() {
          this.$emit('formReady');
        }
      });
    }, 1000);
  });

  export default {
    name: 'IntakeFormAside',
    components: {
      EventForm,
      WorksiteControls
    },
    data() {
      return {
        isFormReady: false
      }
    },
    computed: {
      legacy_site() {
        return this.$store.getters.getCurrentSiteData;
      },
      isSiteClaimed() {
        return this.$store.getters.isCurrentSiteClaimed;
      },
      isCurrentSiteClaimedByUserOrg() {
        return this.$store.getters.isCurrentSiteClaimedByUserOrg;
      },
      siteFormErrors() {
        return this.$store.getters.getSiteFormErrors;
      }
    },
    methods: {
      fireFormReady() {
        this.isFormReady = true;
      },
      saveForm() {
        console.log(this.legacy_site);
        this.$store.dispatch('saveSite');
      },
      saveAndClaim() {
        console.log(this.legacy_site);
      },
      cancel() {

      }
    }
  }
</script>

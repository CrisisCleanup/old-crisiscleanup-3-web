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
          <ul v-show="Object.keys(eventFormData).length === 0">
            <li>Claimed By: {{eventFormData.claimed_by_uid}}</li>
          </ul>
          <div v-show="Object.keys(siteFormErrors).length !== 0" class="alert alert-danger" role="alert">
            <ul>
              <li v-for="(val, key) in siteFormErrors">{{ key }}: {{ val[0] }}</li>
            </ul>
          </div>
          <form>
            <div v-for="(value, key) in phaseCleanup.fields">
              <FormSection :title-label="value.label_t"
                           :label-name="key"
                           :form-data="value"
                           :event-form-data="eventFormData"
                           :update-event-form-data="updateEventFormData"
              ></FormSection>
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
import EventData1 from '../../forms/1-hurricane_sandy_recovery.json';
import EventData2 from '../../forms/2-hattiesburg_ms_tornado.json';
import EventData7 from '../../forms/7-midwest_tornadoes.json';
import EventData37 from '../../forms/37-la_ms_flood_aug_2016.json';
import EventData60 from '../../forms/60-hurricane_harvey.json';
import FormSection from './FormSection.vue'
import {loaded} from 'vue2-google-maps'
import {mapGetters} from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data() {
    return {}
  },
  mounted() {
  },
  computed: {
    phaseCleanup: function() {
      const eid = this.$store.state.worker.event.event_id;
      switch(eid) {
        // case 1:
        //   return EventData1.phase_cleanup;
        // case 2:
        //   return EventData2.phase_cleanup;
        // case 7:
        //   return EventData7.phase_cleanup;
        case 37:
          return EventData37.phase_cleanup;
        // case 60:
        //   return EventData60.phase_cleanup;
        // default:
        //   return EventData60.phase_cleanup;
      }
    },
    eventFormData: {
      get: function() {
        return this.$store.getters.getCurrentSiteData;
      }
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
    ...mapGetters('loading', ['isLoading', 'anyLoading'])
  },
  components: {
    FormSection,
    PulseLoader
  },
  methods: {
    updateEventFormData (key, event) {
      // this.eventFormData[key] = event.target.value;
      let currentData = this.$store.getters.getCurrentSiteData;
      let currentSiteData = Object.assign({}, currentData);
      currentSiteData[key] = event.target.value;
      this.$store.commit('setCurrentSiteData', currentSiteData);
    }
  }
}
</script>

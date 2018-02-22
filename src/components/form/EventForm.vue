<template>
  <div>
      <div v-for="(value, key) in phaseCleanup.fields">
        <FormSection :title-label="value.label_t"
                     :label-name="key"
                     :data="value"
                     :event-form-data="eventFormData"
                     :update-event_form-data="updateEventFormData"
        ></FormSection>
      </div>
  </div>
</template>

<script>
import EventData60 from '../../forms/60-hurricane_harvey.json';
import EventData7 from '../../forms/7-midwest_tornadoes.json';
import EventData1 from '../../forms/1-hurricane_sandy_recovery.json';
import FormSection from './FormSection.vue'

export default {
  data() {
    return {
      eventFormData: {
        name: "Johnson",
        request_date: "12/1/2018"
      }
    }
  },
  mounted() {
  },
  computed: {
    phaseCleanup: function() {
      const eid = this.$store.state.worker.event.event_id;
      switch(eid) {
        case 1:
          return EventData1.phase_cleanup;
        case 60:
          return EventData60.phase_cleanup;
        case 7:
          return EventData7.phase_cleanup;
      }
    }
  },
  components: {
    FormSection
  },
  methods: {
    updateEventFormData (e) {
      let id = e.target.id;
      let fieldId = id.replace('legacy_legacy_site_', '');
      let currentSiteData = Object.assign({}, this.$store.getters.getCurrentSiteData);
      currentSiteData[fieldId] = e.target.value;
      this.$store.commit('setCurrentSiteData', currentSiteData);
    }
  }
}
</script>

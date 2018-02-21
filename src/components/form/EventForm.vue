<template>
  <div>
      <div v-for="(value, key) in phaseCleanup.fields">
        <FormSection :title-label="value.label_t"
                     :label-name="key"
                     :data="value"
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
  }
}
</script>

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
import EventData from '../../forms/60-hurricane_harvey.json';
import FormSection from './FormSection.vue'

export default {
  data() {
    return {
      eventId: 1,
      phaseCleanup: EventData.phase_cleanup
    }
  },
  mounted() {
    console.log(this.parseEventFormJson())
  },
  computed: {
  },
  components: {
    FormSection
  },
  methods: {
    parseEventFormJson() {

      const cleanupPhase = EventData.phase_cleanup;
      // Iterate sections
      for (const key in cleanupPhase.fields) {
        console.log(key);
        this.createSection(cleanupPhase.fields[key])
      }

    },
    createSection(section) {

    }
  }
}
</script>

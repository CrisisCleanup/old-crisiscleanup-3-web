<template>
  <section>
    <h6>{{ $t(titleLabel) }}</h6>
    <div v-for="(value, key) in formData.fields">
      <div v-if="value.field_type=='text'">
        <TextField :label-t="value.label_t && value.label_t" :help-text-t="value.help_text_t"
                   :is-readonly="value.is_readonly" :value="eventFormData[key]"
                   :update-value="updateEventFormData" :fieldKey="key"></TextField>
      </div>
      <div v-else-if="value.field_type=='textarea'">
        <TextAreaField :help-text-t="value.help_text_t" :label-t="value.label_t" :is-readonly="value.is_readonly"/>
      </div>
      <div v-else-if="value.field_type=='select'">
        {{key}} - select
        <SelectField :help-text-t="value.help_text_t" :options="value.options" :label-t="value.label_t"/>
      </div>
      <div v-else-if="value.field_type=='multiselect'">
        {{key}} - multiselect
      </div>
      <div v-else-if="value.field_type=='checkbox'">
        <CheckboxField :help-text-t="value.help_text_t" :options="value.options" :label-t="value.label_t" />
      </div>
      <div v-else-if="value.field_type=='radio'">
        {{key}} - checkbox
      </div>
    </div>
  </section>
</template>

<script>
import TextField from './TextField.vue';
import CheckboxField from './CheckboxField';
import TextAreaField from './TextAreaField';
import SelectField from './SelectField';

export default {
  props: {
    titleLabel: {
      type: String
    },
    labelName: {
      type: String
    },
    formData: {
      type: Object
    },
    titleHelp: {
      type: String
    },
    isRequired: {
      type: Boolean
    },
    eventFormData: {
      type: Object
    },
    updateEventFormData: {
      type: Function
    }
  },
  computed: {
  },
  components: {
    TextField,
    CheckboxField,
    TextAreaField,
    SelectField
  },
  methods: {
  }
}
</script>

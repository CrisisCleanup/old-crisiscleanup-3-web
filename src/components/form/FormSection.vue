<template>
  <section>
    <h5>{{ $t(titleLabel) }}</h5>
    <div v-for="(value, key) in data.fields">
      <!--{{key}}-->
      <div v-if="value.field_type=='text'">
        <TextField :label-t="value.label_t"></TextField>
      </div>
      <div v-else-if="value.field_type=='hidden'">
        {{key}} - hidden
      </div>
      <div v-else-if="value.field_type=='textarea'">
        <TextAreaField :help-text-t="value.helpTextT" :label-t="value.label_t"/>
      </div>
      <div v-else-if="value.field_type=='select'">
        <SelectField :options="value.options" :label-t="value.label_t"/>
      </div>
      <div v-else-if="value.field_type=='multiselect'">
        {{key}} - multiselect
      </div>
      <div v-else-if="value.field_type=='checkbox'">
        <CheckboxField :options="value.options" :label-t="value.label_t"/>
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
    data: {
      type: Object
    },
    titleHelp: {
      type: String
    },
    isRequired: {
      type: Boolean
    },
  },
  computed: {
  },
  components: {
    TextField,
    CheckboxField,
    TextAreaField,
    SelectField
  }
}
</script>

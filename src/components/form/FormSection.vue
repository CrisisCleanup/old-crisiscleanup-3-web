<template>
  <section :id="'ccu-section-' + labelName">
    <hr />
    <h3 v-if="sectionLevel == 1">{{ $t(titleLabel) }}</h3>
    <h5 v-if="sectionLevel == 2">{{ $t(titleLabel) }}</h5>
    <h5 v-if="sectionLevel == 3">{{ $t(titleLabel) }}</h5>
    <h5 v-if="sectionLevel == 4">{{ $t(titleLabel) }}</h5>
    <h5 v-if="sectionLevel == 5">{{ $t(titleLabel) }}</h5>
    <hr />
    <div v-for="(value, key) in formData.fields">
      <div v-if="value.field_type=='text'">
        <TextField
          :validation="value.validation"
          :label-t="value.label_t"
          :help-text-t="value.help_text_t"
          :is-required="value.is_required"
          :is-readonly="value.is_readonly"
          :allow-edit-break-glass="value.allow_edit_break_glass"
          :allow-toggle-hidding="value.allow_toggle_hiding"
          :is-hidden-default="value.is_hidden_default"
          :if-selected-then-work-type="value.if_selected_then_work_type"
          :parent-if-selected-then-work-type="formData.if_selected_then_work_type"
          :parent-field-name="labelName"
          :placeholder-t="value.placeholder_t"
          :value="getFormDataValue(key)"
          :update-value="updateEventFormData"
          :field-key="key"
        />
      </div>
      <div v-else-if="value.field_type=='textarea'">
        <TextAreaField
          :validation="value.validation"
          :label-t="value.label_t"
          :help-text-t="value.help_text_t"
          :is-required="value.is_required"
          :is-readonly="value.is_readonly"
          :allow-edit-break-glass="value.allow_edit_break_glass"
          :allow-toggle-hidding="value.allow_toggle_hiding"
          :is-hidden-default="value.is_hidden_default"
          :if-selected-then-work-type="value.if_selected_then_work_type"
          :parent-if-selected-then-work-type="formData.if_selected_then_work_type"
          :parent-field-name="labelName"
          :placeholder-t="value.placeholder_t"
          :value="getFormDataValue(key)"
          :update-value="updateEventFormData"
          :field-key="key"
        />
      </div>
      <div v-else-if="value.field_type=='select'">
        <SelectField
          :validation="value.validation"
          :label-t="value.label_t"
          :help-text-t="value.help_text_t"
          :is-required="value.is_required"
          :is-readonly="value.is_readonly"
          :allow-edit-break-glass="value.allow_edit_break_glass"
          :allow-toggle-hidding="value.allow_toggle_hiding"
          :is-hidden-default="value.is_hidden_default"
          :if-selected-then-work-type="value.if_selected_then_work_type"
          :parent-if-selected-then-work-type="formData.if_selected_then_work_type"
          :parent-field-name="labelName"
          :placeholder-t="value.placeholder_t"
          :value="getFormDataValue(key)"
          :update-value="updateEventFormData"
          :field-key="key"
          :options="value.options"
        />
      </div>
      <div v-else-if="value.field_type=='multiselect'">
        {{key}} - multiselect
      </div>
      <div v-else-if="value.field_type=='checkbox'">
        <CheckboxField
          :validation="value.validation"
          :label-t="value.label_t"
          :help-text-t="value.help_text_t"
          :is-required="value.is_required"
          :is-readonly="value.is_readonly"
          :allow-edit-break-glass="value.allow_edit_break_glass"
          :allow-toggle-hidding="value.allow_toggle_hiding"
          :is-hidden-default="value.is_hidden_default"
          :if-selected-then-work-type="value.if_selected_then_work_type"
          :parent-if-selected-then-work-type="formData.if_selected_then_work_type"
          :parent-field-name="labelName"
          :placeholder-t="value.placeholder_t"
          :value="getFormDataValue(key)"
          :update-value="updateEventFormData"
          :field-key="key"
          :options="value.options"
          />
      </div>
      <div v-else-if="value.field_type=='radio'">
        {{key}} - checkbox
      </div>
      <div v-else-if="value.field_type=='section'">
        <FormSection :title-label="value.label_t"
                     :label-name="key"
                     :form-data="value"
                     :event-form-data="eventFormData"
                     :update-event-form-data="updateEventFormData"
                     :section-level="sectionLevel + 1"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import TextField from './TextField.vue';
  import CheckboxField from './CheckboxField';
  import TextAreaField from './TextAreaField';
  import SelectField from './SelectField';
  import coreFields from './coreFields';

  export default {
    name: 'FormSection',
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
      },
      sectionLevel: {}
    },
    data() {
      return {
      }
    },
    computed: {},
    components: {
      TextField,
      CheckboxField,
      TextAreaField,
      SelectField
    },
    methods: {
      getFormDataValue(key) {
        if (!coreFields.includes(key)) {
          return this.eventFormData.data[key];
        }
        return this.eventFormData[key];
      }
    }
  }
</script>

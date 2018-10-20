<template>
  <div class="form-group" >
    <label><span ref="isRequiredAsterisk" v-if="isRequired">*</span>{{ $t(labelT) }}
    <span v-if="helpTextT" v-b-tooltip.hover aria-haspopup="true"
            class="has-tip tip-bottom"
            ref="helpTextSpan"
            :title="$t(helpTextT)">
      <i class="fa fa-question"></i>
    </span>
    <small ref="allowEditLink" v-if="allowEditBreakGlass">(<a href="#" @click="breakGlass()">edit</a>)</small>
    </label>

    <div v-if="fieldKey === 'address'">
      <v-autocomplete :input-attrs="{'class': 'form-control form-control-sm', 'id': `${fieldKey}CCU`}" :items="autoCompleteItems" :auto-select-one-item=false :get-label="autoCompleteItemGetLabel"
                      @change="updateField" e :component-item='autoCompleteItemTemplate' @update-items="updateAutoCompleteItems" @item-selected="autoCompleteItemSelected">
      </v-autocomplete>
    </div>
    <div v-else>
      <input class="form-control form-control-sm" type="text" :readonly="localIsReadonly" :value="value" :required="isRequired"
             @input="(event) => inputEntered(event)" :id="fieldKey + 'CCU'" />
    </div>
  </div>
</template>

<script>
  import BaseFormField from './BaseFormField';

  export default {
    mixins: [BaseFormField],
    props: {
      updateEventFormData: {
        type: Function,
      },
      updateAutoCompleteItems: {
        type: Function,
      },
      autoCompleteItemSelected: {
        type: Function,
      },
      autoCompleteItems: {
        type: Array,
      },
      autoCompleteItemGetLabel: {
        type: Function,
      },
      autoCompleteItemTemplate: {
        type: Object,
      },
    },

    methods: {
      updateField(text) {
        this.updateValue(this.fieldKey,
          text,
          this.parentFieldName,
          this.ifSelectedThenWorkType,
          this.parentIfSelectedThenWorkType);
      },
      inputEntered(event) {
        this.updateField(event.target.value);
      },
    },
  };
</script>

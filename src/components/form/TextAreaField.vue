<template>
  <div>
    <label><span ref="isRequiredAsterisk" v-if="isRequired">*</span>{{ $t(labelT) }}
      <span v-if="helpTextT" v-b-tooltip.hover aria-haspopup="true"
            class="has-tip tip-bottom"
            ref="helpTextSpan"
            :title="$t(helpTextT)">
      <i class="fa fa-question"></i>
    </span>
      <small ref="allowEditLink" v-if="allowEditBreakGlass">(<a href="#" @click="breakGlass">edit</a>)</small>
    </label>
    <textarea class="form-control form-control-sm" :readonly="localIsReadonly" :required="isRequired"
              :value="value" @input="(event) => inputEntered(event)" :id="fieldKey + 'CCU'"></textarea>
  </div>
</template>

<script>
  import BaseFormField from './BaseFormField';
  export default {
    mixins: [BaseFormField],
     methods: {
     inputEntered(event) {
        this.updateValue(this.fieldKey,
          event.target.value,
          this.parentFieldName,
          this.ifSelectedThenWorkType,
          this.parentIfSelectedThenWorkType
        );
      }
    }
  }
</script>

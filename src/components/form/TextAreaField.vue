<template>
  <div>
    <label><span v-if="isRequired">*</span>{{ $t(labelT) }}
      <span v-if="helpTextT !== null" v-b-tooltip.hover aria-haspopup="true"
            class="has-tip tip-bottom"
            :title="$t(helpTextT)">
      <i class="fa fa-question"></i>
    </span>
      <small v-if="allowEditBreakGlass">(<a href="#" @click="">edit</a>)</small>
    </label>
    <textarea class="form-control form-control-sm" :readonly="localIsReadonly" :required="isRequired"
              :value="value" @input="(event) => updateValue(fieldKey, event.target.value)"></textarea>
  </div>
</template>

<script>
  import BaseFormField from './BaseFormField';
  export default {
    mixins: [BaseFormField]
  }
</script>

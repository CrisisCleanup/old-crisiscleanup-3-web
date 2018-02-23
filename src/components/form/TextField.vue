<template>
  <div class="form-group">
    <label><span v-if="isRequired">*</span>{{ $t(labelT) }}
    <span v-if="helpTextT !== null" v-b-tooltip.hover aria-haspopup="true"
            class="has-tip tip-bottom"
            :title="$t(helpTextT)">
      <i class="fa fa-question"></i>
    </span>
    <small v-if="allowEditBreakGlass">(<a href="#" @click="breakGlass()">edit</a>)</small>
    </label>
    <input class="form-control" type="text" :readonly="localIsReadonly" :value="value" :required="isRequired"
           @input="(event) => updateValue(fieldKey, event)"/>
  </div>
</template>

<script>
  import BaseFormField from './BaseFormField';
  export default {
    mixins: [BaseFormField]
  }
</script>

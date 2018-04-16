<template>
  <div>
    <div class="form-group">
      <label>
        <span v-if="isRequired">*</span>{{ $t(labelT) }}
        <span v-if="helpTextT !== null" v-b-tooltip.hover aria-haspopup="true"
              class="has-tip tip-bottom"
              :title="$t(helpTextT)">
          <i class="fa fa-question"></i>
        </span>
      </label>
      <select class="form-control form-control-sm" @change="(event) => updateValue(fieldKey, event.target.value)">
        <option v-for="option in options" :value="option.value" :readonly="localIsReadonly" :required="isRequired" :selected="option.value === value">
          {{ $t(option.name_t) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  import BaseFormField from './BaseFormField';

  export default {
    mixins: [BaseFormField],
    props: {
      options: {
        type: Array
      }
    }
  }
</script>

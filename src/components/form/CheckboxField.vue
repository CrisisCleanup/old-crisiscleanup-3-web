<template>
  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" value="" required="isRequired">
      <span v-if="isRequired">*</span>{{ $t(labelT) }}
      <span v-if="helpTextT !== null" v-b-tooltip.hover aria-haspopup="true"
            class="has-tip tip-bottom"
            :title="$t(helpTextT)">
          <i class="fa fa-question"></i>
        </span>
    </label>
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

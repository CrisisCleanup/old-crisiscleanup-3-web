<template>
  <div class="form-check">
    <label class="form-check-label">
      <span ref="isRequiredAsterisk" v-if="isRequired">*</span>{{ $t(labelT) }}
      <span v-if="helpTextT" v-b-tooltip.hover aria-haspopup="true"
            class="has-tip tip-bottom"
            ref="helpTextSpan"
            :title="$t(helpTextT)">
          <i class="fa fa-question"></i>
        </span>
    </label>
    <input class="form-check-input" type="checkbox" required="isRequired"
          :checked="isChecked" @change="(event) => toggleCheck(event)">
  </div>
</template>

<script>
  import BaseFormField from './BaseFormField';

  export default {
    mixins: [BaseFormField],
    computed: {
      isChecked() {
        return this.value === 'y';
      }
    },
    props: {
      options: {
        type: Array
      }
    },
    methods: {
      toggleCheck(event) {
        this.updateValue(this.fieldKey, (event.target.checked) ? 'y' : 'n')
      }
    }
  }
</script>

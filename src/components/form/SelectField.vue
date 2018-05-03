<template>
  <div>
    <div class="form-group">
      <label>
        <span ref="isRequiredAsterisk" v-if="isRequired">*</span>{{ $t(labelT) }}
        <span v-if="helpTextT" v-b-tooltip.hover aria-haspopup="true"
              class="has-tip tip-bottom"
              ref="helpTextSpan"
              :title="$t(helpTextT)">
          <i class="fa fa-question"></i>
        </span>
      </label>
      <select class="form-control form-control-sm" @change="(event) => fireChange(event)"
        :readonly="localIsReadonly" :required="isRequired">
        <option v-for="option in options" :value="option.value" :selected="option.value === value">
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
    },
    methods: {
      fireChange(event) {
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

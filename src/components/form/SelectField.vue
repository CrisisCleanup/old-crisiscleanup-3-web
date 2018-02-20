<template>
  <div class="">
    <div class="form-group">
      <label class="">
        {{ $t(labelT) }}
        <span v-if="helpTextT !== null" data-tooltip aria-haspopup="true"
              class="has-tip tip-bottom"
              :title="helpTextT">
          <i class="fa fa-question"></i>
        </span>
      </label>
      <select class="form-control">
        <option v-for="option in options" :value="option.value">
          {{ $t(option.name_t) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      labelName: {
        type: String
      },
      inputValue: {
        type: Object
      },
      validation: {
        type: String
      },
      labelT: {
        type: String
      },
      helpTextT: {
        type: String
      },
      isRequired: {
        type: Boolean
      },
      isReadonly: {
        type: Boolean
      },
      allowEditBreakGlass: {
        type: Boolean
      },
      allowToggleHiding: {
        type: Boolean
      },
      isHiddenDefault: {
        type: Boolean
      },
      ifSelectedThenWorkType: {
        type: Boolean
      },
      placeholderT: {
        type: String
      },
      options: {
        type: Array
      }
    },
    computed: {}

  }
</script>

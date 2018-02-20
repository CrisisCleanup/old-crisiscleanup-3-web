<template>
  <div>
    <p></p>
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" value="">
        {{ $t(labelT) }}
      </label>
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

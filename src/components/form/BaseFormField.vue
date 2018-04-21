<script>
  export default {
    props: {
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
        type: String
      },
      parentIfSelectedThenWorkType: {
        type: String
      },
      placeholderT: {
        type: String
      },
      value: {
        type: String
      },
      updateValue: {
        type: Function
      },
      fieldKey: {
        type: String
      }
    },
    data() {
      return {
        localIsReadonly: this.isReadonly

      }
    },
    methods: {
      breakGlass() {
        this.localIsReadonly = !this.localIsReadonly;
      }
    }

  }
</script>

<template>
  <div class="form-group">
    <label>{{ $t(labelT) }}<span data-tooltip aria-haspopup="true"
                                                                      class="has-tip tip-bottom"
                                                                      title="This may be the primary contact, resident, or owner.">
      <i class="fa fa-question"></i>
    </span>
    </label>
    <input class="form-control" type="text" id="legacy_legacy_site_name"/>
    <!--<div v-show="siteFormErrors.name" class="text-danger">{{siteFormErrors.name ? siteFormErrors.name[0] : ''}}</div>-->
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
      isRequired: {
        type: Boolean
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
    },
    computed: {}
  }
</script>

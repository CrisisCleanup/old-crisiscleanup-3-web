<template>
  <div class="form-group">
    <label>{{ $t(labelT) }}
    <span v-if="helpTextT !== null" data-tooltip aria-haspopup="true"
            class="has-tip tip-bottom"
            :title="helpTextT">
      <i class="fa fa-question"></i>
    </span>
    <small v-if="allowEditBreakGlass">(<a href="#" @click="">edit</a>)</small>
    </label>
    <input class="form-control" type="text" :readonly="isReadonly"/>
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
    computed: {

    }

//onclick="document.get('legacy_legacy_site_request_date').readOnly=false; document.getElementById('legacy_legacy_site_request_date')//.focus(); return false;"
  }
</script>

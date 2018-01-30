<template>
  <div>
    <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
      <small><b>{{ $t('searchFilterAside.search_worksites') }}</b></small>
    </Callout>
    <div class="container" style="padding-top: 10px;">
      <SearchWorksite></SearchWorksite>
      <br>
      <h3>{{ $t('searchFilterAside.filter_worksites') }}</h3>
      <b-form-fieldset
        :label-cols="1"
        :horizontal="true">
        <b-form-checkbox :plain="true" value="1">
          <b>{{ $t('searchFilterAside.claimed_by') }} </b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="2">
          <b>{{ $t('searchFilterAside.reported_by') }} </b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>{{ $t('searchFilterAside.unclaimed') }}</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>{{ $t('searchFilterAside.open') }}</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>{{ $t('searchFilterAside.closed') }}</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>{{ $t('searchFilterAside.muck_out') }}</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>{{ $t('searchFilterAside.trees') }}</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>{{ $t('searchFilterAside.debris') }}</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>{{ $t('searchFilterAside.other') }}</b>
        </b-form-checkbox>
      </b-form-fieldset>
    </div>
  </div>
</template>

<script>
  import SearchWorksite from './worksite/SearchWorksite';
  import Callout from '@/components/Callout';

  export default {
    name: 'SearchFilterAside',
    components: {
      SearchWorksite,
      Callout
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {
    },
    methods: {}
  }
</script>

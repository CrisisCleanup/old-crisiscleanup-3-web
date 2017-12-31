<template>
  <div>
    <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
      <small><b>Search Worksites</b></small>
    </Callout>
    <div class="container" style="padding-top: 10px;">
      <SearchWorksite></SearchWorksite>
      <br>
      <h3>Filter Worksites</h3>
      <b-form-fieldset
        :label-cols="1"
        :horizontal="true">
        <b-form-checkbox :plain="true" value="1">
          <b>Claimed by </b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="2">
          <b>Reported by </b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>Unclaimed</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>Open</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>Closed</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>Primary problem is flood damage</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>Primary problem is trees</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>Debris removal</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox :plain="true" value="3">
          <b>Other</b>
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

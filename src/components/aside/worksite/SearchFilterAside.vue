<template>
  <div>
    <h3>Search Worksites</h3>
    <SearchWorksite></SearchWorksite>
    <!--
    <div class="input-prepend input-group">
      <span class="input-group-addon"><i class="fa fa-search"></i></span>
      <input id="prependedInput" class="form-control" size="16" type="text" placeholder="">
      <span class="input-group-btn">
          <button class="btn btn-info" type="button">Search</button>
        </span>
    </div>
    -->
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
</template>

<script>
  import Vue from 'vue';
  import SearchWorksite from './SearchWorksite';

  export default {
    name: 'SearchFilterAside',
    components: {
      SearchWorksite
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

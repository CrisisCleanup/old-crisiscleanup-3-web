<template>
  <aside class="aside-menu">
    <b-tabs>
      <b-tab  title="<i class='icon-direction'></i>">
        <WorksiteAside/>
      </b-tab>
      <b-tab  title="<i class='icon-magnifier'></i>">
        <SearchFilterAside></SearchFilterAside>
      </b-tab>
      <b-tab title="<i class='fa fa-filter'></i>">
        <MapFilterAside/>
      </b-tab>
      <b-tab title="<i class='icon-printer'></i>">
        <NotificationAside/>
      </b-tab>
      <b-tab title="<i class='icon-settings'></i>">
        <SettingsAside/>
      </b-tab>
      <b-tab title="<i class='icon-folder-alt'></i>">
      </b-tab>
    </b-tabs>
  </aside>
</template>

<script>
  import Callout from './Callout'
  import cSwitch from './Switch'
  import IconListAside from './aside/IconListAside.vue';
  import NotificationAside from './aside/NotificationAside.vue';
  import SettingsAside from './aside/SettingsAside.vue';
  import WorksiteAside from './aside/worksite/WorksiteAside.vue';
  import SearchFilterAside from './aside/SearchFilterAside';
  import MapFilterAside from "./aside/MapFilterAside";

  export default {
    name: 'aside',
    computed: {
    },
    components: {
      MapFilterAside,
      WorksiteAside,
      IconListAside,
      NotificationAside,
      SettingsAside,
      Callout,
      cSwitch,
      SearchFilterAside
    }
  }
</script>

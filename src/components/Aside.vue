<template>
  <aside class="aside-menu" id="ccu-right-aside">
    <b-tabs>
      <b-tab id="ccu-worksite-aside" title="<i class='icon-direction'></i>">
        <WorksiteAside/>
      </b-tab>
      <b-tab id="ccu-search-filter-aside" title="<i class='icon-magnifier'></i>">
        <SearchFilterAside></SearchFilterAside>
      </b-tab>
      <b-tab id="ccu-map-filter-aside" title="<i class='fa fa-filter'></i>">
        <MapFilterAside/>
      </b-tab>
      <b-tab title="<i class='icon-settings'></i>">
        <MapLayersAside/>
      </b-tab>
      <b-tab id="ccu-notification-aside" title="<i class='icon-printer'></i>">
        <NotificationAside/>
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
  import MapLayersAside from "./aside/MapLayersAside";

  export default {
    name: 'aside',
    computed: {
    },
    components: {
      MapLayersAside,
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

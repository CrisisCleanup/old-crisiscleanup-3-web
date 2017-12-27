<template>
  <aside class="aside-menu">
    <b-tabs>
      <b-tab  title="<i class='icon-direction'></i>">
        <WorksiteAside/>
      </b-tab>
      <b-tab title="<i class='icon-list'></i>">
        <IconListAside/>
      </b-tab>
      <b-tab title="<i class='icon-speech'></i>">
        <NotificationAside/>
      </b-tab>
      <b-tab title="<i class='icon-settings'></i>">
        <SettingsAside/>
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

  export default {
    name: 'aside',
    computed: {
    },
    components: {
      WorksiteAside,
      IconListAside,
      NotificationAside,
      SettingsAside,
      Callout,
      cSwitch
    }
  }
</script>

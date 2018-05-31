<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <router-link class="navbar-brand" to="dashboard"></router-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarMinimize">&#9776;</button>
    <b-navbar-nav class="d-md-down-none">
      <b-nav-item class="px-3">{{ $t('header.incident') }}:&nbsp;&nbsp;
        <select id="ccu-event-context-selector" @change="updateEventContext" :value="getCurrentEvent.id">
          <option v-for="event in getParticipatingEvents" :value="event.id" :selected="event.id === getCurrentEvent.id">{{event.name}}</option>
        </select>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <!--
      <b-nav-item class="d-md-down-none" @click="asideToggle">
        <i class="icon-bell"></i><span class="badge badge-pill badge-danger">5</span>
      </b-nav-item>
      -->
      <b-nav-item-dropdown right>
        <template slot="button-content">
          <img class="img-avatar" alt="">
          <span class="d-md-down-none">{{getUserName}}</span>
        </template>
        <!--<b-dropdown-header tag="div" class="text-center"><strong>{{ $t('actions.account') }}</strong></b-dropdown-header>-->
        <!--<b-dropdown-item><i class="fa fa-bell-o"></i> {{ $t('actions.updates') }}<span class="badge badge-info">42</span></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-envelope-o"></i> {{ $t('actions.messages') }}<span class="badge badge-success">42</span></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-tasks"></i> {{ $t('actions.tasks') }}<span class="badge badge-danger">42</span></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-comments"></i> {{ $t('actions.comments') }}<span class="badge badge-warning">42</span></b-dropdown-item>-->
        <!--<b-dropdown-header tag="div" class="text-center"><strong>{{ $t('actions.settings') }}</strong></b-dropdown-header>-->
        <!--<b-dropdown-item><i class="fa fa-user"></i> {{ $t('actions.profile') }}</b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-wrench"></i> {{ $t('actions.settings') }}</b-dropdown-item>-->
        <!--<b-dropdown-divider></b-dropdown-divider>-->
        <!--<b-dropdown-item><i class="fa fa-shield"></i> {{ $t('actions.lock_account') }}</b-dropdown-item>-->
        <!--<b-dropdown-item id="logout-btn" @click="account"><i class="fa fa-cog"></i> {{ $t('actions.account') }}</b-dropdown-item>-->
        <b-dropdown-item id="logout-btn" @click="logout"><i class="fa fa-lock"></i> {{ $t('actions.logout') }}</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    <button class="navbar-toggler aside-menu-toggler" type="button" @click="asideToggle"><i v-bind:class="rightAsideToggle"></i></button>
  </header>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import CCUMapEventHub from "@/events/CCUMapEventHub";

export default {

  name: 'Header',
  data() {
    return {
      rightAsideToggle: {
        icons: true,
        'icon-arrow-right': false,
        'icon-arrow-left': true,
      },
      rightAsideToggleClosed: true
    }
  },
  computed: {
    ...mapGetters([ 'getParticipatingEvents', 'getCurrentEvent' ]),
    ...mapGetters('auth', [ 'getUserName' ]),
  },
  mounted() {
    this.$store.dispatch('getParticipatingEvents');
  },
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      this.rightAsideToggle["icon-arrow-left"] = !this.rightAsideToggle["icon-arrow-left"];
      this.rightAsideToggle["icon-arrow-right"] = !this.rightAsideToggle["icon-arrow-right"];
      document.body.classList.toggle('aside-menu-hidden')
      CCUMapEventHub.$emit('aside-changed');
    },
    logout (e) {
      this.$store.dispatch('auth/logout');
      setTimeout(() => {
          this.$notify({
            type: 'warn',
            group: 'core',
            title: this.$t('notify.logged_out'),
            text: '',
            width: 500
          });
      }, 750);

      this.$router.push({path: '/'});
    },
    updateEventContext (e) {
      this.$store.dispatch('changeEventContext', e.target.value);
      this.$notify({
        type: 'success',
        group: 'core',
        title: this.$t('notify.viewing_incident'),
        text: this.$store.getters.getCurrentEvent.name,
        width: 500
      });
    }
  }
}
</script>

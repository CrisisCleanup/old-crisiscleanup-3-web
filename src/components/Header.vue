<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <router-link class="navbar-brand" to="dashboard"></router-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarMinimize">&#9776;</button>
    <b-nav is-nav-bar class="d-md-down-none">
      <b-nav-item class="px-3">Event:&nbsp;&nbsp;
        <select @change="updateEventContext" :value="getCurrentEvent.event_id">
          <option v-for="event in getParticipatingEvents" v-bind:value="event.event_id">{{event.name}}</option>
        </select>
      </b-nav-item>
    </b-nav>
    <b-nav is-nav-bar class="ml-auto">
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
        <!--<b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>-->
        <!--<b-dropdown-item><i class="fa fa-bell-o"></i> Updates<span class="badge badge-info">42</span></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-envelope-o"></i> Messages<span class="badge badge-success">42</span></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-tasks"></i> Tasks<span class="badge badge-danger">42</span></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-comments"></i> Comments<span class="badge badge-warning">42</span></b-dropdown-item>-->
        <!--<b-dropdown-header tag="div" class="text-center"><strong>Settings</strong></b-dropdown-header>-->
        <!--<b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-wrench"></i> Settings</b-dropdown-item>-->
        <!--<b-dropdown-divider></b-dropdown-divider>-->
        <!--<b-dropdown-item><i class="fa fa-shield"></i> Lock Account</b-dropdown-item>-->
        <b-dropdown-item id="logout-btn" @click="logout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle"><i v-bind:class="rightAsideToggle"></i></button>
  </header>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

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
    },
    logout (e) {
      this.$store.dispatch('logout');
      this.$router.push({path: '/'});
    },
    updateEventContext (e) {
      this.$store.dispatch('changeEventContext', e.target.value);
    }
  }
}
</script>

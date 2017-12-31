<template>
  <header class="app-header navbar">
    <router-link class="navbar-brand" to="map"></router-link>
    <b-nav is-nav-bar class="d-md-down-none">
      <b-nav-item class="px-3"><router-link to="map">Realtime Map</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-donate">Donate</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-poweredby">Powered By</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-whoweserve">Who We Serve</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-whyccu">Testimonals</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-join">Join Us</router-link></b-nav-item>
    </b-nav>
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item class="px-3"><router-link to="register-organization">Register</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link :to="loginRouteState">{{loginState}}</router-link></b-nav-item>
    </b-nav>
  </header>
</template>
<script>
import vueAuthInstance from '@/services/auth';
import {mapState} from 'vuex';
export default {

  name: 'header',
  computed: {
    ...mapState('auth', ['isAuthenticated']),
    loginState() {
      return this.$store.state.auth.isAuthenticated ? 'Dashboard' : 'Login';
    },
    loginRouteState() {
      return this.$store.state.auth.isAuthenticated ? 'worker' : 'login';
    }
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
      document.body.classList.toggle('aside-menu-hidden')
    },
    goRealtimeMap() {
      this.$router.push({path: 'map'})
      document.querySelector('#go-realtimemap').scrollIntoView({
        behavior: 'smooth'
      })
    },
    goDonate() {
      this.$router.push({path: 'map'}).then(() => {
          document.querySelector('#go-donate').scrollIntoView({
            behavior: 'smooth'
          })
      });

    },
    goPoweredBy() {
      this.$router.push({path: 'map'})
      document.querySelector('#go-poweredby').scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

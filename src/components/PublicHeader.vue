<template>
  <header class="app-header navbar">
    <router-link class="navbar-brand" to="map"></router-link>
    <b-nav b-navbar-nav class="d-md-down-none">
      <b-nav-item class="px-3"><router-link to="map">{{ $t('publicHeader.realtime_map') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-donate">{{ $t('publicHeader.donate') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-poweredby">{{ $t('publicHeader.poweredby') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-whoweserve">{{ $t('publicHeader.who_serve') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-whyccu">{{ $t('publicHeader.testimonials') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-join">{{ $t('publicHeader.join') }}</router-link></b-nav-item>
    </b-nav>
    <b-nav b-navbar-nav class="ml-auto">
      <b-nav-item class="px-3"><router-link to="register-organization">{{ $t('publicHeader.register') }}</router-link></b-nav-item>
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

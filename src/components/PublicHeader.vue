<template>
  <header class="app-header navbar">
    <router-link class="navbar-brand" to="map"></router-link>
    <b-nav is-nav-bar class="d-md-down-none">
      <b-nav-item class="px-3"><router-link to="map">{{ $t('publicHeader.t1') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-donate">{{ $t('publicHeader.t2') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-poweredby">{{ $t('publicHeader.t3') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-whoweserve">{{ $t('publicHeader.t4') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-whyccu">{{ $t('publicHeader.t5') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="map#go-join">{{ $t('publicHeader.t6') }}</router-link></b-nav-item>
    </b-nav>
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item class="px-3"><router-link to="register-organization">{{ $t('publicHeader.t7') }}</router-link></b-nav-item>
      <b-nav-item class="px-3"><router-link to="login">{{ $t('publicHeader.t8') }}</router-link></b-nav-item>
    </b-nav>
  </header>
</template>
<script>
import vueAuthInstance from '@/services/auth';
export default {

  name: 'header',
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

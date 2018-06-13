<template>
  <footer class="app-footer">
    <!-- &copy; 2018 <a href="https://www.crisiscleanup.org">CrisisCleanup, LLC</a>. -->
    <!--<span class="float-right">{{ $t('footer.powered_by') }} <a href="http://coreui.io">CoreUI</a></span>-->
    <router-link to="/">{{ footer.home }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/about">{{ footer.about }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/worker/map">{{ footer.map }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="http://blog.crisiscleanup.org/">
      {{ footer.blog }}
    </a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="demo.crisiscleanup.org">{{ footer.demo }}</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/register-organization">
      {{ footer.register }}
    </router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/training">{{ footer.training }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/contact">{{ footer.contact }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/terms">{{ footer.terms }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/privacy">{{ footer.privacy }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="https://crisiscleanup.zendesk.com/hc/en-us/sections/200166636-Policies">
      {{ footer.policies }}
    </a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="/login">{{ footer.login }}</router-link>
  </footer>
</template>

<style type="text/css">
  .app-footer {
    display: flex;
    width: initial;
    justify-content: center;
  }
</style>

<script>
export default {
  name: 'footer',
  data () {
    return {
      footer: {
        home: this.$t('footer.home'),
        about: this.$t('footer.about'),
        map: this.$t('footer.map'),
        blog: this.$t('footer.blog'),
        demo: this.$t('footer.demo'),
        register: this.$t('footer.register'),
        training: this.$t('footer.training'),
        contact: this.$t('footer.contact'),
        terms: this.$t('footer.terms'),
        privacy: this.$t('footer.privacy'),
        policies: this.$t('footer.policies'),
        login: this.$t('footer.login'),
      }
    }
  },
}
</script>

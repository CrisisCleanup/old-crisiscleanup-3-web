<template>
  <footer class="app-footer">
    <!-- &copy; 2018 <a href="https://www.crisiscleanup.org">CrisisCleanup, LLC</a>. -->
    <!--<span class="float-right">{{ $t('footer.powered_by') }} <a href="http://coreui.io">CoreUI</a></span>-->
    <router-link to="/">{{ footer.home }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'About'}">{{ footer.about }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'WorkerMap'}">{{ footer.map }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="http://blog.crisiscleanup.org/">
      {{ footer.blog }}
    </a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="demo.crisiscleanup.org">{{ footer.demo }}</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'Register Organization'}">
      {{ footer.register }}
    </router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'Training'}">{{ footer.training }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'Contact'}">{{ footer.contact }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'Terms'}">{{ footer.terms }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'Privacy'}">{{ footer.privacy }}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="https://crisiscleanup.zendesk.com/hc/en-us/sections/200166636-Policies">
      {{ footer.policies }}
    </a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{name: 'Login'}">{{ footer.login }}</router-link>
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
Vue.use(BootstrapVue);
import i18n from './services/i18n';

window.$ = window.jQuery = require('jquery');

sync(store, router);

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: {
    App
  },
});

export { app, router, store }

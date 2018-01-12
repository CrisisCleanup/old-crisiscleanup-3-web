// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
// import VueI18n from 'vue-i18n'
import VueI18n from 'vue-i18n';
window.$ = window.jQuery = require('jquery')

sync(store, router);

Vue.use(VueI18n);
Vue.use(BootstrapVue);

import messages from './services/i18n';

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

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

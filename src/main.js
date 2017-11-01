// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
window.$ = window.jQuery = require('jquery')

sync(store, router);

Vue.use(BootstrapVue);
Vue.url.options.root = process.env.API_ENDPOINT;

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
});


export { app, router, store }

import Vue from 'vue'
import VueResource from 'vue-resource'
import { VueAuthenticate } from 'vue-authenticate'

// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios, axios);

Vue.use(VueResource);
Vue.url.options.root = process.env.API_ENDPOINT;

const vueAuthInstance = new VueAuthenticate(Vue.http, {
  baseUrl: process.env.API_ENDPOINT,
  loginUrl: '/api-token-auth/'
});

export default vueAuthInstance

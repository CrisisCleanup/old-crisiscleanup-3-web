import Vue from 'vue'
import { VueAuthenticate } from 'vue-authenticate'
import axios from 'axios';
import VueAxios from 'vue-axios';

export const ax = axios.create({
  baseURL: `${process.env.API_ENDPOINT}`
});

Vue.use(VueAxios, ax);

const vueAuthInstance = new VueAuthenticate(Vue.axios, {
  baseUrl: process.env.API_ENDPOINT,
  loginUrl: '/api-token-auth',
  tokenName: 'access_token'
});

export default vueAuthInstance

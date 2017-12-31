
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createVuexLoader } from 'vuex-loading'

Vue.use(Vuex);

// Modules
import auth from './auth.js'
import worker from './worker.js'
import publicModule from './public.js'
import map from './map.js'

// https://github.com/robinvdvleuten/vuex-persistedstate
const persistedStateOptions = {
  paths: ['auth', 'worker']
};

const VuexLoading = createVuexLoader({
  // The Vuex module name, 'loading' by default.
  moduleName: 'loading',
  // The Vue component name, 'v-loading' by default.
  componentName: 'v-loading',
  // Vue component class name, 'v-loading' by default.
  className: 'v-loading',
});

Vue.use(VuexLoading);

const store = new Vuex.Store({
  modules: {
    auth,
    worker,
    publicModule,
    map
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [VuexLoading.Store, createPersistedState(persistedStateOptions)]
});

export default store

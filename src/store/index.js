
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

// Modules
import auth from './auth.js'
import worker from './worker.js'
import publicModule from './public.js'
import map from './map.js'

// https://github.com/robinvdvleuten/vuex-persistedstate
const persistedStateOptions = {
  paths: ['auth', 'worker', 'publicModule']
};

const store = new Vuex.Store({
  modules: {
    auth,
    worker,
    publicModule,
    map
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState(persistedStateOptions)]
});

export default store

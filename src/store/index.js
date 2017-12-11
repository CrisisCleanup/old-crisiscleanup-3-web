
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

// Modules
import auth from './auth.js'
import worker from './worker.js'
import publicModule from './public.js'

const store = new Vuex.Store({
  modules: {
    auth,
    worker,
    publicModule
  },
  plugins: [createPersistedState()]
});

export default store

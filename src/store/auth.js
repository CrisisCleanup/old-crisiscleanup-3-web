import vueAuthInstance from '../services/auth.js'

export default {
  namespaced: true,
  state: {
    profile: null,
    isAuthenticated: vueAuthInstance.isAuthenticated(),
    loginErrors: null
  },

  mutations: {
    isAuthenticated (state, payload) {
      state.isAuthenticated = payload.isAuthenticated
    },

    setProfile (state, payload) {
      state.profile = payload.profile
    },

    setLoginErrors (state, payload) {
      state.loginErrors = payload.hasError;
    }
  },

  actions: {
    login (context, payload) {
      payload = payload || {}
      return vueAuthInstance.login(payload.user, payload.requestOptions).then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        });
      }, function(error) {
        console.log(error);
        context.commit('setLoginErrors', {hasError: true});
      })
    },

    register (context, payload) {
      payload = payload || {}
      return vueAuthInstance.register(payload.user, payload.requestOptions).then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        })
      })
    },

    logout (context, payload) {
      payload = payload || {}
      return vueAuthInstance.logout(payload.requestOptions).then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        })
      })
    },

    authenticate (context, payload) {
      payload = payload || {}
      return vueAuthInstance.authenticate(payload.provider, payload.userData, payload.requestOptions).then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        })
      })
    }
  }
}

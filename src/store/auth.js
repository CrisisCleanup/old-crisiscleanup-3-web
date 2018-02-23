import vueAuthInstance from '../services/auth.js'
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';

export default {
  namespaced: true,
  state: {
    profile: {},
    isAuthenticated: vueAuthInstance.isAuthenticated(),
    isTokenExpired: false,
    loginErrors: null
  },

  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated
    },

    setProfile(state, payload) {
      state.profile = payload.profile
    },

    setLoginErrors(state, payload) {
      state.loginErrors = payload.hasError;
    },

    setIsTokenExpired(state, payload) {
      state.isTokenExpired = payload.isTokenExpired;
    }
  },

  getters: {
    getUserId: state => state.profile.id,
    getUserName: state => state.profile.name,
    getIsAuthenticated: state => state.isAuthenticated,
    getProfile: state => state.profile
  },

  actions: {
    login(context, payload) {
      payload = payload || {};
      return vueAuthInstance.login(payload.user, payload.requestOptions).then(function (resp) {
        const decodedToken = jwt_decode(resp.data.access_token);
        console.log(decodedToken)
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        });
        context.commit('setProfile', {
          profile: decodedToken.user_claims
        });
      }, function (error) {
        console.log(error);
        context.commit('setLoginErrors', { hasError: true });
      })
    },

    register(context, payload) {
      payload = payload || {}
      return vueAuthInstance.register(payload.user, payload.requestOptions).then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        })
      })
    },

    logout(context, payload) {
      payload = payload || {}
      return vueAuthInstance.logout(payload.requestOptions).then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        })
      })
    },

    authenticate(context, payload) {
      payload = payload || {}
      return vueAuthInstance.authenticate(payload.provider, payload.userData, payload.requestOptions).then(function () {
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuthInstance.isAuthenticated()
        })
      })
    },

    checkToken({ state, commit }) {
      const token = vueAuthInstance.getToken();
      var decodedToken = jwt.decode(token, { complete: true });
      var dateNow = new Date();

      if (!decodedToken) {
        commit('setIsTokenExpired', false)
      } else if (decodedToken.exp < dateNow.getTime()) {
        commit('setIsTokenExpired', true)
      } else {
        commit('setIsTokenExpired', false)
      }
    }
  }
}

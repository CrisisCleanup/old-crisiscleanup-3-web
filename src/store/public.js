import Vue from 'vue';

export default {
  state: {
    realtimeStats: {
      orgCount: 0,
      requests: 0,
      completed: 0,
      working: 0
    },
    org: {
      accepted_terms:false,
      does_cleanup:false,
      does_coordination:false,
      does_damage_assessment:false,
      does_follow_up:false,
      does_minor_repairs:false,
      does_other_activity:false,
      does_rebuilding:false,
      government:false,
      not_an_org:false,
      publishable:false,
      review_other_organizations:false,
      contact: {}
    },
    errors: {
      orgFormErrors: {
        contact: {}
      }
    }
  },

  mutations: {
    setRealtimeStats (state, payload) {
      state.realtimeStats.orgCount = payload.orgCount;
      state.realtimeStats.requests = payload.requests;
      state.realtimeStats.completed = payload.completed;
      state.realtimeStats.working = payload.working;
    },
    updateOrg (state, value) {
      state.org = Object.assign({}, state.org, value);
    },
    updateContact (state, value) {
      state.org.contact = Object.assign({}, state.org.contact, value);
    },
    setOrgFormErrors (state, payload) {
      state.errors.orgFormErrors = payload;
    },
  },

  getters: {
    getRealtimeStats: state => state.realtimeStats,
    getOrg: state => state.org,
    getOrgFormErrors: state => state.errors.orgFormErrors
  },

  actions: {
    getRealtimeStats({ commit, state }) {
      let payload = {};
      Vue.axios.get(`/stats/realtime-ticker`).then(r => {
        payload.orgCount = r.data.org_count;
        payload.requests = r.data.worksite_count;
        payload.completed = r.data.worksite_statuses['Closed, completed'];
        payload.completed += r.data.worksite_statuses['Closed, done by others'];
        payload.working = r.data.worksite_statuses['Open, assigned'];
        payload.working += r.data.worksite_statuses['Open, partially completed'];
        commit('setRealtimeStats', payload);
      });
    },
    postOrganization({ commit, state, dispatch}) {
      Vue.axios.post(`/organizations`, state.org).then(r => {
        console.log(r);
      }).catch(error => {
        commit('setOrgFormErrors', error.response.data);
      });
    }
  }
};

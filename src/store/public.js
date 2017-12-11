import Vue from 'vue';

export default {
  state: {
    realtimeStats: {
      orgCount: 0,
      requests: 0,
      completed: 0,
      working: 0
    },
  },

  mutations: {
    setRealtimeStats (state, payload) {
      state.realtimeStats.orgCount = payload.orgCount;
      state.realtimeStats.requests = payload.requests;
      state.realtimeStats.completed = payload.completed;
      state.realtimeStats.working = payload.working;
    },
  },

  getters: {
    getRealtimeStats: state => state.realtimeStats,
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
    }
  }
};

export default {
  namespaced: true,
  state: {
    states: false,
  },

  mutations: {
    setStatesLayer(state, value) {
      state.activeMapFilters = value;
    }
  },

  getters: {},

  actions: {}
};

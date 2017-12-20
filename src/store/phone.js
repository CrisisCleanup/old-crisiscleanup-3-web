
export default {
  namespaced: true,

  state: {
    needsWelcome: true,
  },

  mutations: {
    seenWelcome(state) {
      state.needsWelcome = false;
    },
    needsWelcome(state) {
      state.needsWelcome = true;
    },
  },

  getters: { },

  actions: { },
};

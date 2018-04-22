export default {
  namespaced: true,
  state: {
    claimedByNone: false,
    reportedByNone: false,
    unclaimed: false,
    open: false,
    closed: false,
    primaryIsFloodDamage: false,
    primaryIsTrees: false,
    debrisRemoval: false,
    other: false
  },

  mutations: {
    addMapFilter(state, value) {
      state.activeMapFilters.push(value);
    },
    removeMapFilter(state, value) {
      state.activeMapFilters.pop(value);
    },
    setClaimedByNone(state, value) {
      state.claimedByNone = value;
    },
    setReportedByNone(state, value) {
      state.reportedByNone = value;
    },
    setUnclaimed(state, value) {
      state.unclaimed = value;
    },
    setOpen(state, value) {
      state.open = value;
    },
    setClosed(state, value) {
      state.closed = value;
    },
    setPrimaryIsFloodDamage(state, value) {
      state.primaryIsFloodDamage = value;
    },
    setPrimaryIsTrees(state, value) {
      state.primaryIsTrees = value;
    },
    setDebrisRemoval(state, value) {
      state.debrisRemoval = value;
    },
    setOther(state, value) {
      state.other = value;
    },
  },

  getters: {},

  actions: {}
};

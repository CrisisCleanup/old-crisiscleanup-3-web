export default {
    namespaced: true,

    state: {
        needsWelcome: true,
        takingCalls: false,
    },

    mutations: {
        seenWelcome(state) {
            state.needsWelcome = false;
        },
        needsWelcome(state) {
            state.needsWelcome = true;
        },
        setTakingCalls(takingCallsState) {
            state.takingCalls = takingCallsState;
        },
    },

    getters: {
        getTakingCalls: state => state.takingCalls,
    },

    actions: {},
};
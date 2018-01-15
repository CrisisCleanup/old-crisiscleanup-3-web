export default {
    namespaced: true,

    state: {
        needsWelcome: true,
        state: 'startState',
    },

    mutations: {
        seenWelcome(state) {
            state.needsWelcome = false;
        },
        needsWelcome(state) {
            state.needsWelcome = true;
        },
        takingCalls(state) {
            state.state = 'takingIncomingCalls';
        },
        notTakingCalls(state) {
            state.state = 'startState';
        },
    },

    getters: {},

    actions: {},
};
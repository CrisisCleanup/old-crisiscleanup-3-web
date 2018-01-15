export default {
    namespaced: true,

    state: {
        caller: null,
        needsWelcome: true,
        state: 'startState',
    },

    mutations: {
        setCaller(state, caller){
            state.caller = caller;
        },
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

    getters: {
        getState: state => state.state,
    },

    actions: {},
};
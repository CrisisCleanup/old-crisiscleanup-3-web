export default {
    namespaced: true,

    state: {
        caller: null,
        needsWelcome: true,
        state: 'notAvailable',
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
        takingIncomingCall(state) {
            state.state = 'takingIncomingCall';
        },
        available(state) {
            state.state = 'available';
        },
        notAvailable(state) {
            state.state = 'notAvailable';
        },
    },

    getters: {
        getState: state => state.state,
    },

    actions: {},
};
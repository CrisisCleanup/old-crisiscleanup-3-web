import Vue from 'vue';

export default {
    namespaced: true,

    state: {
        user: null,
        gateway: null,
        needsWelcome: true,
        callState: 'notAvailable',
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setGateway(state, gateway) {
            state.gateway = gateway;
        },
        seenWelcome(state) {
            state.needsWelcome = false;
        },
        needsWelcome(state) {
            state.needsWelcome = true;
        },
        takingIncomingCall(state) {
            state.callState = 'takingIncomingCall';
        },
        available(state) {
            state.callState = 'available';
        },
        notAvailable(state) {
            state.callState = 'notAvailable';
        },
    },

    getters: {
        getCallState: state => state.callState,
    },

    actions: {
        getUser({ commit, state }, userId) {
            return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/users/` + userId + `/get_detail`).then(resp => {
                commit('setUser', resp.data)
            })
        },
    },
};
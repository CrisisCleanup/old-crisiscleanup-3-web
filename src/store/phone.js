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
        getCallCenterAccessible: state => {
            if(state.user == null) {
                return false;
            } else {
                return state.user.willing_to_receive_calls;
            }
        }
    },

    actions: {
        getUser({ commit, state }, payload) {
            if(payload.overwrite || (!payload.overwrite && state.user == null)) {
                return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/users/` + payload.userId + `/get_detail`).then(resp => {
                    commit('setUser', resp.data)
                })
            }
            return true;
        },
    },
};
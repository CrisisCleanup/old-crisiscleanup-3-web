import Vue from 'vue';

export default {
    namespaced: true,

    state: {
        user: {},
        caller: {},
        gateway: {},
        needsWelcome: true,
        callState: 'AWAY'
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setCaller(state, caller) {
            state.caller = caller;
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
        available(state) {
            state.callState = 'AVAILABLE';
        },
        away(state) {
            state.callState = 'AWAY';
        }
    },

    getters: {
        getCallState: state => state.callState,
        getUser: state => state.user,
        getGateway: state => state.gateway,
        getCallCenterAccessible: state => {
            if (state.user == null) {
                return false;
            } else {
                return state.user.willing_to_receive_calls;
            }
        }
    },

    actions: {
        getUserDetails({ commit, state }, payload) {
            if (payload.overwrite || (!payload.overwrite && (state.user == null || state.user.id == null || state.user.id == undefined))) {
                return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/users/` + payload.userId + `/get_detail`).then(resp => {
                    commit('setUser', resp.data)
                })
            }
            return true;
        },
        getCallerDetails({ commit, state }, callerId) {
            return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/callers/` + callerId + `/get_detail`).then(resp => {
                commit('setCaller', resp.data)
            })
        },
        getGatewayDetails({ commit, state }, gatewayId) {
            return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/gateways/` + gatewayId + `/get_detail`).then(resp => {
                commit('setGateway', resp.data)
            })
        },
        updateUser({ commit, state }, payload) {
            return Vue.axios.patch(`${process.env.API_PHONE_ENDPOINT}/users/` + payload.id, payload).then(resp => {
                commit('setUser', resp.data)
            })
        }
    },
};
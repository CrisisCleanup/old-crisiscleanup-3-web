import Vue from 'vue';

export default {
    namespaced: true,

    state: {
        user: {},
        call: {},
        caller: {},
        gateway: {},
        needsWelcome: true,
        callState: 'AWAY',
        languages: [],
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setCall(state, call) {
            state.call = call;
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
        setState(state, newState) {
            state.callState = newState;
        },
        setLanguages(state, languages) {
            state.languages = languages;
        }
    },

    getters: {
        getCallState: state => state.callState,
        getCaller: state => state.caller,
        getUser: state => state.user,
        getGateway: state => state.gateway,
        getCallCenterAccessible: state => {
            if (state.user == null) {
                return false;
            } else {
                return state.user.willing_to_receive_calls;
            }
        },
        getLanguages: state => state.languages
    },
    actions: {
        getUserDetails({ commit, state }, payload) {
            if (payload.overwrite || (!payload.overwrite && (state.user == null || state.user.cc_id == null || state.user.cc_id == undefined))) {
                return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/users/` + payload.userId + `/get_detail`).then(resp => {
                    commit('setUser', resp.data)
                })
            }
            return true;
        },
        getLanguages({ commit }) {
            return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/languages`).then(resp => {
                commit('setLanguages', resp.data.results);
            })
        },
        getCallerDetails({ commit, state }, phoneNumber) {
            return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/callers/` + phoneNumber + `/get_detail`)
                .then(resp => {
                    commit('setCaller', resp.data)
                    return resp.data;
                })
                .catch(err => {
                    //If the caller doesn't exist, create them
                    Vue.axios.post(`${process.env.API_PHONE_ENDPOINT}/callers`, { phone_number: phoneNumber }).then(resp => {
                        commit('setCaller', resp.data)
                        return resp.data;
                    })
                });
        },
        updateCall({ commit, state }, call) {
            // If it has an id, update, otherwise create
            if (call.id) {
                return Vue.axios.patch(`${process.env.API_PHONE_ENDPOINT}/calls/` + call.id, call).then(resp => {
                    commit('setCall', resp.data)
                })
            } else {
                return Vue.axios.post(`${process.env.API_PHONE_ENDPOINT}/calls`, call).then(resp => {
                    commit('setCall', resp.data)
                })
            }
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
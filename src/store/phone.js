import Vue from 'vue';

export default {
    namespaced: true,

    state: {
        user: {},
        caller: {},
        needsWelcome: true,
        callState: 'notAvailable',
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setCaller(state, caller) {
            state.caller = caller;
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
        getUser: state => state.user,
        getCallCenterAccessible: state => {
            if (state.user == null) {
                return false;
            } else {
                return state.user.willing_to_receive_calls;
            }
        }
    },

    actions: {
        getUser({ commit, state }, payload) {
            if (payload.overwrite || (!payload.overwrite && (state.user == null || state.user.id == null || state.user.id == undefined))) {
                return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/users/` + payload.userId + `/get_detail`).then(resp => {
                    commit('setUser', resp.data)
                })
            }
            return true;
        },
        getCaller({ commit, state }, callerId) {
            return Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/callers/` + callerId + `/get_detail`).then(resp => {
                commit('setCaller', resp.data)
            })
        },
        updateUser({ commit, state }, payload) {
            return Vue.axios.patch(`${process.env.API_PHONE_ENDPOINT}/users/` + payload.id, payload).then(resp => {
                commit('setUser', resp.data)
            })
        },
    },
};
import Vue from 'vue';
import { createActionHelpers } from 'vuex-loading'
const { startLoading, endLoading } = createActionHelpers({
    moduleName: 'loading'
});

function getDashboardWorksites({ state, commit, dispatch }) {
    const url = `/worksites?legacy_event_id=${state.event.event_id}&limit=${state.dashboardWorksites.limit}&offset=${state.dashboardWorksites.offset}`;
    startLoading(dispatch, 'getDashboardWorksites');
    Vue.axios.get(url).then((response) => {
        endLoading(dispatch, 'getDashboardWorksites');
        commit('setDashboardWorksites', response.data.results)
    }, (error) => {});
}

export default {
    state: {
        participatingEvents: [],
        event: {
            event_id: 60,
            uid: ''
        },
        currentUserId: 0,
        currentOrgId: 0,
        siteData: {
            data: {}
        },
        isNewSite: false,
        mapViewingArea: {},
        dashboardWorksites: {
            offset: 0,
            limit: 4,
            worksites: []
        },
        worksiteStats: {
            worksitesCompleted: 0,
            worksitesOpenUnassigned: 0,
            worksitesAssigned: 0,
            worksitesValueOfServices: 0
        },
        errors: {
            siteFormErrors: {}
        },
        worksiteViews: {
            editWorksite: false,
            searchFilter: false,
            printWorksite: false,
            worksiteHistory: false
        },
        asideView: false,
        searchingWorksites: []
    },

    mutations: {
        setSearchingWorksites(state, value) {
            state.searchingWorksites = value;
        },
        setActiveWorksiteView(state, payload) {
            for (let property in state.worksiteViews) {
                if (state.worksiteViews.hasOwnProperty(property)) {
                    state.worksiteViews[property] = false;
                }
            }
            state.worksiteViews[payload.view] = true;
        },
        setParticipatingEvents(state, payload) {
            state.participatingEvents = payload;
        },
        setEventContext(state, value) {
            state.event = value;
        },
        setCurrentUserId(state, payload) {
            state.currentUserId = payload;
        },
        setCurrentOrgId(state, payload) {
            state.currentOrgId = payload;
        },
        setCurrentSiteData(state, payload) {
            if (payload.data instanceof String || typeof payload.data === 'string') {
                try {
                    payload.data = JSON.parse("{" + payload.data.replace(/=>/g, ': ').replace(/\"/g, '"') + "}");
                } catch (e) {
                    console.log("Error parsing currentSiteData");
                }
            } else {
                payload.data = {}
            }
            state.siteData = payload;
        },
        resetCurrentSiteData(state) {
            state.siteData = {
                data: {}
            };
            state.isNewSite = true;
        },
        setIsNewSite(state, payload) {
            state.isNewSite = payload;
        },
        setMapViewingArea(state, payload) {
            state.mapViewingArea = payload;
        },
        setDashboardWorksites(state, payload) {
            state.dashboardWorksites.worksites = payload;
        },
        incrementDashboardWorksitesOffset(state) {
            state.dashboardWorksites.offset += state.dashboardWorksites.limit;
        },
        decrementDashboardWorksitesOffset(state) {
            if (state.dashboardWorksites.offset >= state.dashboardWorksites.limit) {
                state.dashboardWorksites.offset -= state.dashboardWorksites.limit;
            }
        },
        resetDashboardWorksitesOffset(state) {
            state.dashboardWorksites.offset = 0;
        },
        setWorksiteStats(state, payload) {
            if (payload.length > 0) {
                const closedCompletedObj = payload.find(x => x.status === 'Closed, completed');
                const closedCompletedCount = closedCompletedObj !== undefined ? closedCompletedObj.count : 0;
                state.worksiteStats.worksitesCompleted = closedCompletedCount;
                state.worksiteStats.worksitesOpenUnassigned = payload.find(x => x.status === 'Open, unassigned') !== undefined ? payload.find(x => x.status === 'Open, unassigned').count : 0;
                state.worksiteStats.worksitesAssigned = payload.find(x => x.status === 'Open, assigned') !== undefined ? payload.find(x => x.status === 'Open, assigned').count : 0;
                state.worksiteStats.worksitesValueOfServices = closedCompletedCount * 18000;
            } else {
                state.worksiteStats.worksitesCompleted = 0;
                state.worksiteStats.worksitesOpenUnassigned = 0;
                state.worksiteStats.worksitesAssigned = 0;
                state.worksiteStats.worksitesValueOfServices = 0;
            }
        },
        setSiteFormErrors(state, payload) {
            state.errors.siteFormErrors = payload;
        },
        setCurrentSiteDataData(state, payload) {
            state.siteData.data = payload.data;
        },
        setAsideView(state) {
            state.asideView = !state.asideView;
        },
    },

    getters: {
        getCurrentSiteData: state => state.siteData,
        isCurrentSiteClaimed: state => state.siteData.claimed_by !== null,
        isCurrentSiteClaimedByUserOrg: state => state.currentOrgId === state.siteData.claimed_by,
        getDashboardWorksites: state => state.dashboardWorksites,
        getWorksiteStats: state => state.worksiteStats,
        getSiteFormErrors: state => state.errors.siteFormErrors,
        getParticipatingEvents: state => state.participatingEvents,
        getWorksiteViews: state => state.worksiteViews,
        getCurrentEvent: state => state.event,
        getAsideView: state => state.asideView,
    },

    actions: {
        getSite({ commit, state, dispatch }, siteId) {
            startLoading(dispatch, 'getSite');
            return Vue.axios.get(`/worksites/${siteId}`).then(resp => {
                commit('setCurrentSiteData', resp.data);
                commit('setIsNewSite', false);
                commit('setSiteFormErrors', {})
                commit('setActiveWorksiteView', { view: 'editWorksite' });
                endLoading(dispatch, 'getSite');
            });
        },
        claimSite({ commit, state }) {
            const claim = {
                // claimed_by: state.currentOrgId,
                user: state.currentUserId
            };
            Vue.axios.patch(`/worksites/${state.siteData.id}`, claim).then(resp => {
                commit('setCurrentSiteData', resp.data);
                commit('setIsNewSite', false);
            });
        },
        nextDashboardWorksites({ commit, state, dispatch }) {
            commit('incrementDashboardWorksitesOffset');
            getDashboardWorksites({ commit, state, dispatch });
        },
        previousDashboardWorksites({ commit, state, dispatch }) {
            commit('decrementDashboardWorksitesOffset');
            getDashboardWorksites({ commit, state, dispatch });
        },
        getDashboardWorksites({ commit, state, dispatch }) {
            commit('resetDashboardWorksitesOffset');
            getDashboardWorksites({ commit, state, dispatch });
        },
        saveSite({ commit, state }) {
            commit('setCurrentSiteDataData', { data: JSON.stringify(state.siteData.data) });
            if (state.isNewSite) {
                Vue.axios.post(`/worksites`, state.siteData).then(resp => {
                    commit('setCurrentSiteData', resp.data);
                }).catch(error => {
                    commit('setSiteFormErrors', error.response.data)
                });
            } else {
                Vue.axios.patch(`/worksites/${state.siteData.id}`, state.siteData).then(resp => {
                    commit('setCurrentSiteData', resp.data);
                }).catch(error => {
                    commit('setSiteFormErrors', error.response.data)
                })
            }
        },
        getWorksiteStats({ commit, state, dispatch }) {
            startLoading(dispatch, 'getWorksiteStats');
            Vue.axios.get(`/worksites/stats/statuses?legacy_event_id=${state.event.event_id}`).then(resp => {
                commit('setWorksiteStats', resp.data.results)
                endLoading(dispatch, 'getWorksiteStats');
            });
        },
        getParticipatingEvents({ commit, state }) {
            Vue.axios.get(`/events?ordering=-created_at&limit=500`).then(resp => {
                commit('setParticipatingEvents', resp.data.results)
            });
        },
        async changeEventContext({ commit, dispatch, state }, eventId) {
            console.log(eventId)
            console.log(state.participatingEvents)
            const event = state.participatingEvents.find(val => val.event_id == eventId);
            commit('setEventContext', event);
            await dispatch('getWorksiteStats');
            await dispatch('getDashboardWorksites');
            await dispatch('map/getWorksites', eventId);
        },
        searchWorksites({ commit, dispatch, state }, searchCriteria) {
            Vue.axios.get(`/worksites?limit=10&legacy_event_id=${state.event.event_id}&search=${searchCriteria}`).then(resp => {
                commit('setSearchingWorksites', resp.data.results)
            });
        }
    }
};
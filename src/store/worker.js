import Vue from 'vue';

function getDashboardWorksites({state, commit}) {
  const url = `/worksites?legacy_event_id=${state.eventId}&limit=${state.dashboardWorksites.limit}&offset=${state.dashboardWorksites.offset}`;
  Vue.axios.get(url).then((response) => {
    commit('setDashboardWorksites', response.data.results)
  }, (error) => {
  });
}

export default {
  state: {
    eventId: 60,
    currentSiteId: 1,
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
    }
  },

  mutations: {
    setEvent (state, payload) {
      state.eventId = payload;
    },
    setCurrentUserId (state, payload) {
      state.currentUserId = payload;
    },
    setCurrentOrgId (state, payload) {
      state.currentOrgId = payload;
    },
    setCurrentSiteId (state, payload) {
      state.currentSiteId = payload;
    },
    setCurrentSiteData (state, payload) {
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
    resetCurrentSiteData (state) {
      state.siteData = {
        data: {}
      };
      state.isNewSite = true;
    },
    setIsNewSite (state, payload) {
      state.isNewSite = payload;
    },
    setMapViewingArea (state, payload) {
      state.mapViewingArea = payload;
    },
    setClaimInfo (state, payload) {
    },
    setDashboardWorksites (state, payload) {
      state.dashboardWorksites.worksites = payload;
    },
    incrementDashboardWorksitesOffset (state) {
      state.dashboardWorksites.offset += state.dashboardWorksites.limit;
    },
    decrementDashboardWorksitesOffset (state) {
      if (state.dashboardWorksites.offset >= state.dashboardWorksites.limit) {
        state.dashboardWorksites.offset -= state.dashboardWorksites.limit;
      }
    },
    resetDashboardWorksitesOffset (state) {
      state.dashboardWorksites.offset = 0;
    },
    setWorksiteStats (state, payload) {
      const closedCompletedCount = payload.find(x => x.status === 'Closed, completed').count;
      state.worksiteStats.worksitesCompleted = closedCompletedCount;
      state.worksiteStats.worksitesOpenUnassigned = payload.find(x => x.status === 'Open, unassigned').count;
      state.worksiteStats.worksitesAssigned = payload.find(x => x.status === 'Open, assigned').count;
      state.worksiteStats.worksitesValueOfServices = closedCompletedCount * 18000;
    },
    setSiteFormErrors (state, payload) {
      state.errors.siteFormErrors = payload;
    },
    setCurrentSiteDataData (state, payload) {
      state.siteData.data = payload.data;
    }
  },

  getters: {
    getCurrentSiteId: state => state.currentSiteId,
    getCurrentSiteData: state => state.siteData,
    getCurrentOrgId: state => state.currentOrgId,
    isCurrentSiteClaimed: state => state.siteData.claimed_by !== null,
    isCurrentSiteClaimedByUserOrg: state => state.currentOrgId === state.siteData.claimed_by,
    getDashboardWorksites: state => state.dashboardWorksites,
    getWorksiteStats: state => state.worksiteStats,
    getSiteFormErrors: state => state.errors.siteFormErrors
  },

  actions: {
    getSite({ commit, state }, siteId) {
      Vue.axios.get(`/worksites/${siteId}`).then(resp => {
        commit('setCurrentSiteData', resp.data);
        commit('setCurrentSiteId', resp.data.id);
        commit('setIsNewSite', false);
        commit('setSiteFormErrors', {})
      });
    },
    claimSite({commit, state}) {
      const claim = {
        // claimed_by: state.currentOrgId,
        user: state.currentUserId
      };
      Vue.axios.patch(`/worksites/${state.currentSiteId}`, claim).then(resp => {
        commit('setCurrentSiteData', resp.data);
        commit('setIsNewSite', false);
      });
    },
    nextDashboardWorksites({commit, state}) {
      commit('incrementDashboardWorksitesOffset');
      getDashboardWorksites({commit, state});
    },
    previousDashboardWorksites({commit, state}) {
      commit('decrementDashboardWorksitesOffset');
      getDashboardWorksites({commit, state});
    },
    getDashboardWorksites({ commit, state }) {
      commit('resetDashboardWorksitesOffset');
      getDashboardWorksites({commit, state});
    },
    saveSite({commit, state}) {
      commit('setCurrentSiteDataData', {data: JSON.stringify(state.siteData.data)});
      if (state.isNewSite) {
        Vue.axios.post(`/worksites`, state.siteData).then(resp => {
          commit('setCurrentSiteData', resp.data);
        }).catch(error => {
          commit('setSiteFormErrors', error.response.data)
        });
      } else {
        Vue.axios.patch(`/worksites/${state.currentSiteId}`, state.siteData).then(resp => {
          commit('setCurrentSiteData', resp.data);
        }).catch(error => {
          commit('setSiteFormErrors', error.response.data)
        })
      }
    },
    getWorksiteStats({commit, state}) {
      Vue.axios.get(`/worksites/stats/statuses?legacy_event_id=${state.eventId}`).then(resp => {
        commit('setWorksiteStats', resp.data.results)
      });
    }
  }
};

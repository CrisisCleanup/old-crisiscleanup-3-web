import Vue from 'vue';

export default {
  state: {
    eventId: 60,
    currentSiteId: 1,
    currentUserId: 0,
    currentOrgId: 0,
    siteData: {},
    mapViewingArea: {},
    worksites: []
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
      state.siteData = payload;
    },
    setMapViewingArea (state, payload) {
      state.mapViewingArea = payload;
    },
    setClaimInfo (state, payload) {
    },
    setWorksites (state, payload) {
      state.worksites = payload;
    }

  },

  getters: {
    getCurrentSiteId: state => state.currentSiteId,
    getCurrentSiteData: state => state.siteData,
    getCurrentOrgId: state => state.currentOrgId,
    isCurrentSiteClaimed: state => state.siteData.claimed_by !== null,
    isCurrentSiteClaimedByUserOrg: state => state.currentOrgId === state.siteData.claimed_by,
    getWorksites: state => state.worksites
  },

  actions: {
    getSite({ commit, state }, siteId) {
      Vue.http.get(`${process.env.API_ENDPOINT}/api/worksites/${siteId}/`).then(resp => {
        commit('setCurrentSiteData', resp.body);
        commit('setCurrentSiteId', resp.body.id);
      });
    },
    claimSite({commit, state}) {
      const claim = {
        // claimed_by: state.currentOrgId,
        user: state.currentUserId
      };
      Vue.http.patch(`${process.env.API_ENDPOINT}/api/worksites/${state.currentSiteId}/`, claim).then(resp => {
        commit('setCurrentSiteData', resp.body);
      });
    },
    getWorksites({ commit, state }) {
      Vue.http.get(`${process.env.API_ENDPOINT}/api/worksites/`).then((response) => {
        console.log(response.body.results)
        commit('setWorksites', response.body.results)
      }, (error) => {
      });
    }
  }
};

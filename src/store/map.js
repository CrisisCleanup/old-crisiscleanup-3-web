import Vue from "vue";

export default {
  namespaced: true,
  state: {
    map: null,
    zoomLevel: 5,
    mapTypeId: 1, // google.maps.MapTypeId.ROADMAP
    center: {
      lat: 39.0,
      lng: -90.0
    },
    dragging: false,
    waiting: false,
    activeMarkers: {
      m: []
    },
    bounds: {
      minLon: null,
      minLat: null,
      maxLon: null,
      maxLat: null
    },
    points: [],
    tempMarkers: [],
    getMarkersFunc: null,
    activeMapFilters: [],
  },

  mutations: {
    setWorkerMap (state, payload) {
      state.workerMap = payload.workerMap;
    },
    setCenter (state, value) {
      state.center = {
        lat: value.lat(),
        lng: value.lng()
      }
    },
    setZoomLevel (state, value) {
      state.zoomLevel = value;
    },
    setDragging (state, value) {
      state.dragging = value;
    },
    setMarkers (state, value) {
      state.activeMarkers.m = value;
    },
    setGetMarkersFunc (state, value) {
      state.getMarkersFunc = value;
    },
    setBounds (state, value) {
      state.bounds = value;
    },
    setTempMarkers (state, value) {
      state.tempMarkers = value;
    },
    addMapFilter (state, value) {
      state.activeMapFilters.push(value);
    },
    removeMapFilter (state, value) {
      state.activeMapFilters.pop(value);
    }
  },

  getters: {
  },

  actions: {
    getWorksites({ commit, state, rootState}, eventId) {
      console.log(rootState.filters);
      const fields = "id,lat,lng,status,claimed_by,work_type,city,reported_by_uid,name";

      const params = {
        limit: 100,
        event: eventId,
        fields: fields
      };

      if (rootState.filters.claimedByNone) {
        params.claimed_by = 'null'
      }

      return Vue.axios.get('/worksites', {params: params}).then(resp => {
        commit('setTempMarkers', resp.data.results);
      });
    },
    setMarkers({ commit, state }, markers) {
      commit('setMarkers', markers);
    }
  }
};

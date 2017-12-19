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
    getMarkersFunc: null
  },

  mutations: {
    setWorkerMap (state, payload) {
      state.workerMap = payload.workerMap;
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
    }
  },

  getters: {
    getWorkerMap: state => state.workerMap,
  },

  actions: {
    getWorksites({ commit, state }, eventId) {
      const fields = "id,lat,lng,status,claimed_by_uid,work_type,city,reported_by_uid,name";
      const endpoint = `/worksites?legacy_event_id=${eventId}&fields=${fields}`;
      return Vue.axios.get(endpoint).then(resp => {
        commit('setTempMarkers', resp.data.results);
      });
    },
    setMarkers({ commit, state }, markers) {
      commit('setMarkers', markers);
    }
  }
};

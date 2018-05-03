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
        params.claimed_by = rootState.worker.currentOrgId;
      }

      if (rootState.filters.reportedByNone) {
        params.reported_by = rootState.worker.currentOrgId;
      }

      if (rootState.filters.unclaimed) {
        params.claimed_by__isnull = 'true'
      }

      if (rootState.filters.open) {
        params.status_icontains = 'open'
      }

      if (rootState.filters.closed) {
        params.status_icontains = 'closed'
      }

      let worktypes = [];

      if (rootState.filters.primaryIsTrees) {
        worktypes.push('trees');
      }

      if (rootState.filters.primaryIsFloodDamage) {
        worktypes.push('flood');
      }

      if (rootState.filters.debrisRemoval) {
        worktypes.push('debris');
      }

      if (rootState.filters.other) {
        worktypes.push('other');
      }

      if (rootState.filters.moldRemediation) {
        worktypes.push('mold');
      }

      if (worktypes.length > 0) {
        params.worktypes_list = worktypes.join(',')
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

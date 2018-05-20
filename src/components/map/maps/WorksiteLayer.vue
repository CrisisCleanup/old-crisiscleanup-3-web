<script>
  import * as L from 'leaflet';
  import Vue from 'vue';
  import supercluster from 'supercluster';
  import getMarkerInfo from '../utils/markerImageManager';
  import { mapState } from 'vuex';

  let index;

  export default {
    props: {
      mapObject: {
        type: Object
      }
    },
    data() {
      return {
        worksiteLayer: L.geoJson(null, {
          pointToLayer: this.createClusterIcon
        }),
        activeWorksiteText: ''
      }
    },
    computed: {
      ...mapState('map', {
        pointParams: state => state.pointParams
      })
    },
    watch: {
      pointParams: function(val) {
        this.loadWorksites();
      },
    },
    mounted() {
      this.mapObject.on('moveend', this.updateCluster);
      this.worksiteLayer.addTo(this.mapObject);
      const eid = this.$store.state.worker.event.id;
      this.$store.dispatch('map/getWorksites', eid).then((resp) => {});
      // this.loadWorksites();

      this.worksiteLayer.on('click', (e) => {
        if (e.layer.feature.properties.cluster_id) {
          this.updateCluster(
            e.latlng,
            e.layer.feature.properties.cluster_id
          );
        }
      });
    },
    render() {
      return null;
    },
    beforeDestroy: function() {
      const mapViewingArea = {
        center: this.mapObject.getCenter(),
        zoom: this.mapObject.getZoom()
      }
      this.$store.commit('map/setMapViewingArea', mapViewingArea);
      this.$store.commit('map/setCenter', this.mapObject.getCenter());

    },
    methods: {
      loadWorksites() {
        // this.$vuexLoading.startLoading('worksite-points');
        this.mapObject.fire('dataloading');
        Vue.axios.get('/worksites/points', {params: this.pointParams}).then(resp => {
          index = supercluster({
            log: false,
            radius: 150,
            maxZoom: 16
          }).load(resp.data.features);
          this.updateCluster();
          // this.$vuexLoading.endLoading('worksite-points');
          this.checkIfEventContextChanged(resp.data.features[0])
          this.mapObject.fire('dataload');
        });
      },
      checkIfEventContextChanged(feature) {
        const eventContextChanged = this.$store.getters.getEventJustChanged;
        if (eventContextChanged) {
          this.$store.commit('map/setZoomLevel', 7);
          this.$store.commit('setEventContextJustChanged', false);
        }
        if (feature  && eventContextChanged) {
          const coord = feature.geometry.coordinates;
          this.mapObject.flyTo([coord[1], coord[0]]);
        }
      },
      updateCluster(center = null, expansionZoom = null) {
        if (center && expansionZoom) {
          this.mapObject.flyTo(center, index.getClusterExpansionZoom(expansionZoom));
        } else {
          if (index !== undefined) {
            const bounds = this.mapObject.getBounds();
            const bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
            this.worksiteLayer.clearLayers();
            this.worksiteLayer.addData(index.getClusters(bbox, this.mapObject.getZoom()))
          }
        }
      },
      flyToSite(marker) {
        this.mapObject.flyTo(marker.getLatLng());
      },
      createMarkerIcon(feature, latlng) {
          const markerInfo = getMarkerInfo(null, feature.properties.status, feature.properties.work_type);
          let i = L.icon({
            // TODO: claimed_by
            iconUrl: markerInfo.path,
            className: markerInfo.cssClass
          });
          let m = L.marker(latlng, {icon: i});
          m.on('click', () => {
            this.$store.commit('setActiveWorksiteView', {view: 'editWorksite'});
            this.$store.dispatch('getSite', feature.id).then((worksite) => {
              // m.setPopupContent(`${worksite.name}\n${worksite.case_number}`);
              this.flyToSite(m);
              // m.bindPopup(`${worksite.name}\n${worksite.case_number}`).openPopup();
            });
          });
          return m;
      },
      createClusterIcon(feature, latlng) {
        if (!feature.properties.cluster) {
          return this.createMarkerIcon(feature, latlng);
        }

        const count = feature.properties.point_count;
        const size =
          count < 100 ? 'small' :
            count < 1000 ? 'medium' : 'large';
        const icon = L.divIcon({
          html: '<div><span>' + feature.properties.point_count_abbreviated + '</span></div>',
          className: 'marker-cluster marker-cluster-all',
          iconSize: L.point(40, 40)
        });

        return L.marker(latlng, {icon: icon});
      }
    }
  }
  // generateMarkerImagePath(mark.claimed_by, mark.status, mark.work_type)
</script>
<style>

  .marker-cluster-all{
    background-color: rgba(99, 99, 99, 0.99);
  }

  .marker-cluster-all div {
    background-color: rgba(203, 203, 201, 0.6);
  }

  .marker-cluster-medium {
    background-color: rgba(241, 211, 87, 0.6);
  }

  .marker-cluster-medium div {
    background-color: rgba(240, 194, 12, 0.6);
  }

  .marker-cluster-large {
    background-color: rgba(253, 156, 115, 0.6);
  }

  .marker-cluster-large div {
    background-color: rgba(241, 128, 23, 0.6);
  }

  .marker-cluster {
    background-clip: padding-box;
    border-radius: 20px;
  }

  .marker-cluster div {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;

    text-align: center;
    border-radius: 15px;
    font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
  }

  .marker-cluster span {
    line-height: 30px;
  }
</style>

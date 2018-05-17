
<script>
  import * as L from 'leaflet';
  import Vue from 'vue';
  import supercluster from 'supercluster';

  let index;

  export default {
    props: {
      mapObject: {
        type: Object
      }
    },
    data () {
      return {
        worksiteLayer: L.geoJson(null, {
          pointToLayer: this.createClusterIcon
        }),
      }
    },
    mounted() {
     this.mapObject.on('moveend', this.updateCluster);
     this.worksiteLayer.addTo(this.mapObject);
     this.initialLoadWorksites();

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
    methods: {
      initialLoadWorksites() {
        const params = {
          'worksite__event': this.$store.state.worker.event.id
        };
        Vue.axios.get('/points', {params: params}).then(resp => {
          index = supercluster({
            log: false,
            radius: 50,
            maxZoom: 16
          }).load(resp.data.features);
          this.updateCluster();
        });
      },
      updateCluster(center=null, expansionZoom=null) {
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
      createClusterIcon(feature, latlng) {
        if (!feature.properties.cluster) {
          // console.log(feature);
          let m = L.marker(latlng);
          m.bindPopup(`ID: ${feature.id}`);
          m.on('click', () => {
            this.$store.commit('setActiveWorksiteView', {view: 'editWorksite'});
            this.$store.dispatch('getSite', feature.id).then(() => {
              //this.centerOnSite();
            });
          });
          return m;
        }

        const count = feature.properties.point_count;
        const size =
          count < 100 ? 'small' :
            count < 1000 ? 'medium' : 'large';
        const icon = L.divIcon({
          html: '<div><span>' + feature.properties.point_count_abbreviated + '</span></div>',
          className: 'marker-cluster marker-cluster-' + size,
          iconSize: L.point(40, 40)
        });

        return L.marker(latlng, {icon: icon});
      }

    }
  }
</script>

<style>

  .marker-cluster-small {
    background-color: rgba(181, 226, 140, 0.6);
  }
  .marker-cluster-small div {
    background-color: rgba(110, 204, 57, 0.6);
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

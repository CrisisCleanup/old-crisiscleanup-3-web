<script>
  import * as L from 'leaflet';
  import CCUMapEventHub from "@/events/CCUMapEventHub";
  import Vue from 'vue';

  export default {
    props: {
      mapObject: {
        type: Object
      }
    },
    data() {
      return {}
    },
    mounted() {
      CCUMapEventHub.$on('add-states-layer', (e) => {
        this.addStateLayer();
      });
      CCUMapEventHub.$on('remove-states-layer', (e) => {
        this.removeStateLayer();
      });
    },
    render() {
      return null;
    },
    methods: {
      addStateLayer() {
        function onEachFeature(feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }

        Vue.axios.get('/states').then(resp => {
          this.stateLayer = L.geoJSON(resp.data, {
            onEachFeature: onEachFeature
          }).addTo(this.mapObject);
        });
      },
      removeStateLayer() {
        if (this.stateLayer) {
          this.stateLayer.remove();
        }
      }
    }
  }
</script>

<style>
</style>

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
      CCUMapEventHub.$on('add-counties-layer', (e) => {
        this.addCountiesLayer();
      });
      CCUMapEventHub.$on('remove-counties-layer', (e) => {
        this.removeCountiesLayer();
      });
    },
    render() {
      return null;
    },
    methods: {
      addCountiesLayer() {
        function onEachFeature(feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }

        Vue.axios.get('/geo/counties').then(resp => {
          this.countiesLayer = L.geoJSON(resp.data, {
            onEachFeature: onEachFeature
          }).addTo(this.mapObject);
        });
      },
      removeCountiesLayer() {
        if (this.countiesLayer) {
          this.countiesLayer.remove();
        }
      }
    }
  }
</script>

<style>
</style>

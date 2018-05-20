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
      CCUMapEventHub.$on('add-event-boundary-layer', (e) => {
        this.addEventBoundariesLayer();
      });
      CCUMapEventHub.$on('remove-event-boundary-layer', (e) => {
        this.removeEventBoundariesLayer();
      });
    },
    render() {
      return null;
    },
    methods: {
      addEventBoundariesLayer() {
        function onEachFeature(feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }

        const style = {
          "color": "#ff7780",
          "weight": 3
        };

        Vue.axios.get('/geo/event-boundaries').then(resp => {
          this.eventBoundariesLayer = L.geoJSON(resp.data, {
            onEachFeature: onEachFeature,
            style: style
          }).addTo(this.mapObject);
        });
      },
      removeEventBoundariesLayer() {
        if (this.eventBoundariesLayer) {
          this.eventBoundariesLayer.remove();
        }
      }
    }
  }
</script>

<style>
</style>

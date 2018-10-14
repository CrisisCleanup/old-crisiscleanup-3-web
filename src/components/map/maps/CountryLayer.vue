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
      CCUMapEventHub.$on('add-countries-layer', (e) => {
        this.addCountriesLayer();
      });
      CCUMapEventHub.$on('remove-countries-layer', (e) => {
        this.removeCountriesLayer();
      });
    },
    render() {
      return null;
    },
    methods: {
      addCountriesLayer() {
        function onEachFeature(feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }

        const style = {
          "color": "#ff7780",
          "weight": 3
        };

        Vue.axios.get('/geo/countries').then(resp => {
          this.countriesLayer = L.geoJSON(resp.data, {
            onEachFeature: onEachFeature,
            style: style
          }).addTo(this.mapObject);
        });
      },
      removeCountriesLayer() {
        if (this.countriesLayer) {
          this.countriesLayer.remove();
        }
      }
    }
  }
</script>

<style>
</style>

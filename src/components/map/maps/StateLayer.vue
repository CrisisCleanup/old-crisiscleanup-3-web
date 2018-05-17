
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
    data () {
      return {
      }
    },
    mounted() {
        CCUMapEventHub.$on('states-layer', (e) => {
          this.addStateBoundaries();
        });
    },
    render() {
      return null;
    },
    methods: {
      addStateBoundaries() {
        function onEachFeature(feature, layer) {
          if (feature.properties  && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
        Vue.axios.get('/states').then(resp => {
          L.geoJSON(resp.data, {
            onEachFeature: onEachFeature
          }).addTo(this.mapObject);
        });
      },
    }
  }
</script>

<style>
</style>

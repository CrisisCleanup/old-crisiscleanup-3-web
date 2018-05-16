<script>
  import { mapState, mapGetters } from 'vuex';
  import CCUMapEventHub from '@/events/CCUMapEventHub';

  export default {
    props: {},
    data() {
      return {
        markers: [],
        trackingMapCenter: [],
      }
    },
    /*
    computed: {
      ...mapState('map', {
        dragging: state => state.dragging,
        tempMarkers: state => state.tempMarkers
      }),
      ...mapGetters([
        'getCurrentSiteData'
      ]),
    },
    */
    methods: {
      mapIsClicked() {
        CCUMapEventHub.$emit('map-is-clicked');
      },
    }
  }
</script>

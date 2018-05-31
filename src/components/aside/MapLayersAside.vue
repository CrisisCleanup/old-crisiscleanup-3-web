<template>
  <div>
    <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
      <small><b>Map Layers</b></small>
    </Callout>
    <div class="container" style="padding-top: 10px;">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="statesLayerActivated" @change="switchStatesLayer"/>
          Show U.S. States
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="countriesLayerActivated" @change="switchCountriesLayer"/>
          Show World Countries
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="countiesLayerActivated" @change="switchCountiesLayer"/>
          Show U.S. Counties
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="eventBoundaryLayerActivated" @change="switchEventBoundaryLayer"/>
          Event Boundary
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import Callout from '@/components/Callout';
  import CCUMapEventHub from '@/events/CCUMapEventHub';

  export default {
    components: {
      Callout
    },
    data() {
      return {
        statesLayerActivated: false,
        countriesLayerActivated: false,
        countiesLayerActivated: false,
        eventBoundaryLayerActivated: false
      }
    },
    // computed: {
    //   states: {
    //     get() {
    //       return this.$store.state.layers.states;
    //     },
    //     set(value) {
    //       this.$store.commit('layers/setStatesLayer', value);
    //     }
    //   }
    // },
    mounted() {
    },
    methods: {
      switchStatesLayer() {
        if (this.statesLayerActivated) {
          CCUMapEventHub.$emit('add-states-layer');
        } else {
          CCUMapEventHub.$emit('remove-states-layer');
        }
      },
      switchCountriesLayer() {
        if (this.countriesLayerActivated) {
          CCUMapEventHub.$emit('add-countries-layer');
        } else {
          CCUMapEventHub.$emit('remove-countries-layer');
        }
      },
      switchCountiesLayer() {
        if (this.countiesLayerActivated) {
          CCUMapEventHub.$emit('add-counties-layer');
        } else {
          CCUMapEventHub.$emit('remove-counties-layer');
        }
      },
      switchEventBoundaryLayer() {
        if (this.eventBoundaryLayerActivated) {
          CCUMapEventHub.$emit('add-event-boundary-layer');
        } else {
          CCUMapEventHub.$emit('remove-event-boundary-layer');
        }
      }
    }
  }
</script>

<template>
  <div>
    <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
      <small><b>Map Layers</b></small>
    </Callout>
    <div class="container" style="padding-top: 10px;">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="states" @change="triggerMapLayerRefresh"/>
          Show U.S. States
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
      return {}
    },
    computed: {
      states: {
        get() {
          return this.$store.state.layers.states;
        },
        set(value) {
          this.$store.commit('layers/setStatesLayer', value);
        }
      }
    },
    mounted() {
    },
    methods: {
      triggerMapLayerRefresh() {
        console.log('Trigger STATES LAYER')
        CCUMapEventHub.$emit('states-layer');
        // const eid = this.$store.state.worker.event.id;
        // this.$store.dispatch('map/getWorksites', eid).then((resp) => {
        // })
      }
    }
  }
</script>

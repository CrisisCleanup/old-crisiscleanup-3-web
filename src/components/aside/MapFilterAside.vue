<template>
  <div>
    <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
      <small><b>Map Filters</b></small>
    </Callout>
    <div class="container" style="padding-top: 10px;">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="claimedByNone" @change="triggerMapRefresh"/>
          Claimed by {{ userOrganization && userOrganization.name }}
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="reportedByNone" @change="triggerMapRefresh"/>
          Reported by {{ userOrganization && userOrganization.name }}
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="unclaimed" @change="triggerMapRefresh"/>
          Unclaimed
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="open" @change="triggerMapRefresh"/>
          Open
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="closed" @change="triggerMapRefresh"/>
          Closed
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="primaryIsFloodDamage" @change="triggerMapRefresh"/>
          Primary problem is flood damage
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="primaryIsTrees" @change="triggerMapRefresh"/>
          Primary problem is trees
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="debrisRemoval" @change="triggerMapRefresh"/>
          Debris removal
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="other" @change="triggerMapRefresh"/>
          Other
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import Callout from '@/components/Callout';
  import CCUMapEventHub from '@/events/CCUMapEventHub';

  import {mapState} from 'vuex';

  export default {
    components: {
      Callout
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('auth', ['userOrganization']),
      claimedByNone: {
        get() {
          return this.$store.state.filters.claimedByNone;
        },
        set(value) {
          this.$store.commit('filters/setClaimedByNone', value);
        }
      },
      reportedByNone: {
        get() {
          return this.$store.state.filters.reportedByNone;
        },
        set(value) {
          this.$store.commit('filters/setReportedByNone', value);
        }
      },
      unclaimed: {
        get() {
          return this.$store.state.filters.unclaimed;
        },
        set(value) {
          this.$store.commit('filters/setUnclaimed', value);
        }
      },
      open: {
        get() {
          return this.$store.state.filters.open;
        },
        set(value) {
          this.$store.commit('filters/setOpen', value);
        }
      },
      closed: {
        get() {
          return this.$store.state.filters.closed;
        },
        set(value) {
          this.$store.commit('filters/setClosed', value);
        }
      },
      primaryIsFloodDamage: {
        get() {
          return this.$store.state.filters.primaryIsFloodDamage;
        },
        set(value) {
          this.$store.commit('filters/setPrimaryIsFloodDamage', value);
        }
      },
      primaryIsTrees: {
        get() {
          return this.$store.state.filters.primaryIsTrees;
        },
        set(value) {
          this.$store.commit('filters/setPrimaryIsTrees', value);
        }
      },
      debrisRemoval: {
        get() {
          return this.$store.state.filters.debrisRemoval;
        },
        set(value) {
          this.$store.commit('filters/setDebrisRemoval', value);
        }
      },
      other: {
        get() {
          return this.$store.state.filters.other;
        },
        set(value) {
          this.$store.commit('filters/setOther', value);
        }
      }
    },
    mounted() {
    },
    methods: {
      triggerMapRefresh() {
        const eid = this.$store.state.worker.event.id;
        this.$store.dispatch('map/getWorksites', eid).then((resp) => {
        })
      }
    }
  }
</script>

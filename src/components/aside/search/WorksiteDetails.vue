<template>
  <div v-show="item">
    <h4>Worksite Details</h4>
    <dl class="row" v-show="item !== null">
      <dt class="col-sm-3">Name</dt>
      <dd class="col-sm-9">{{ item && item.name }}</dd>
      <dt class="col-sm-3">Address</dt>
      <dd class="col-sm-9">{{ item && item.address }}</dd>
      <dt class="col-sm-3">City</dt>
      <dd class="col-sm-9">{{ item && item.city }}</dd>
      <dt class="col-sm-3">Phone</dt>
      <dd class="col-sm-9">{{ item && item.phone }}</dd>
    </dl>
    <button @click="viewSite" class="btn btn-primary">View on Map</button>
  </div>
</template>

<script>
  import CCUMapEventHub from '@/events/CCUMapEventHub'
  export default {
    props: {
      item: {
        required: true,
      },
    },
    methods: {
      viewSite() {
        this.$store.dispatch('getSite', this.item.id).then(() => {
          if (this.$router) {
            this.$router.push({ path: 'map' });
          }
          CCUMapEventHub.$emit('site-search');
        })
      }
    }
  }
</script>

<template>
  <div v-show="item">
    <h4>Organization Details</h4>
    <dl class="row">
      <dt class="col-sm-3">Name</dt>
      <dd class="col-sm-9">{{ item && item.name }}</dd>
      <dt class="col-sm-3">Address</dt>
      <dd class="col-sm-9">{{ item && item.address }}</dd>
      <dt class="col-sm-3">City</dt>
      <dd class="col-sm-9">{{ item && item.city }}</dd>
      <dt class="col-sm-3">Phone</dt>
      <dd class="col-sm-9">{{ item && item.phone }}</dd>
      <dt class="col-sm-3">Email</dt>
      <dd class="col-sm-9">{{ item && item.email }}</dd>
    </dl>
    <button class="btn btn-primary">View More Details</button>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        required: true,
      },
    }
  }
</script>

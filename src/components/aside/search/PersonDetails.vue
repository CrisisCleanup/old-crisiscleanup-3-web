<template>
  <div v-if="item !== null">
    <h4>Person Details</h4>
    <dl class="row">
      <dt class="col-sm-3">Name</dt>
      <dd class="col-sm-9">{{ item && item.name }}</dd>
      <dt class="col-sm-3">Role</dt>
      <dd class="col-sm-9">{{ item && item.role }}</dd>
      <dt class="col-sm-3">Title</dt>
      <dd class="col-sm-9">{{ item && item.title }}</dd>
    </dl>
    <button class="btn btn-primary">Contact</button>
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

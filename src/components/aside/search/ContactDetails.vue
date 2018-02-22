<template>
  <div v-if="item !== null">
    <h4>Contact Details</h4>
    <dl class="row">
      <dt class="col-sm-3">Name</dt>
      <dd class="col-sm-9">{{ item && item.first_name }}</dd>
      <dt class="col-sm-3">Is Primary Contact</dt>
      <dd class="col-sm-9">{{ item && item.is_primary }}</dd>
      <dt class="col-sm-3">Title</dt>
      <dd class="col-sm-9">{{ item && item.title }}</dd>
      <dt class="col-sm-3">Organizational Title</dt>
      <dd class="col-sm-9">{{ item && item.organizational_title }}</dd>
      <dt class="col-sm-3">Email</dt>
      <dd class="col-sm-9">{{ item && item.email }}</dd>
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

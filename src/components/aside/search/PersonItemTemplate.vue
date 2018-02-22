<template>
  <div>
    <b></b>
    <span>{{ item.name }}</span>
    <abbr></abbr>
  </div>
</template>

<script>
  export default {
    props: {
      item: { required: true },
      searchText: { required: true }
    }
  }
</script>

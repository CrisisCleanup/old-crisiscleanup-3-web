<template>
  <div>
    <b>{{item.case_number}}</b>
    <span>{{ item.name }}</span>
    <abbr>{{item.address}} {{item.city}} {{item.state}} {{item.zip_code}}</abbr>
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

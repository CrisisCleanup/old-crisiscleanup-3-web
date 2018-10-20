<template>
  <div>
    <b>{{item.address.mainAddressLine}}</b>
    <abbr>{{ item.address.addressLastLine }}</abbr>
  </div>
</template>

<script>
  export default {
    props: {
      item: { required: true },
      searchText: { required: true },
    },
  };
</script>

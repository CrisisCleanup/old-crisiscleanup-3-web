<template>
  <div class="animated fadeIn">
    <WorksiteDatatable></WorksiteDatatable>
  </div>
</template>

<script>
  import WorksiteDatatable from '@/components/datatables/WorksiteDatatable';

  export default {
    name: 'MyOrganization',
    components: {
      WorksiteDatatable
    }
  }
</script>

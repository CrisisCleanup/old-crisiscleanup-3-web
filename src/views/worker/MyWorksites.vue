<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <h1>My Work Orders</h1>
      </div>
    </div>
    <WorksiteDatatable></WorksiteDatatable>
  </div>
</template>

<script>
  import WorksiteDatatable from '@/components/datatables/WorksiteDatatable';

  export default {
    name: 'BrowseWorksites',
    components: {
      WorksiteDatatable
    }
  }
</script>

<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-10">
        <h1>Browse Event Worksites</h1>
      </div>
      <div class="col-md-2">
        <DownloadWorksiteCsv />
      </div>
    </div>
    <WorksiteDatatable></WorksiteDatatable>
  </div>
</template>

<script>
  import WorksiteDatatable from '@/components/datatables/WorksiteDatatable';
  import DownloadWorksiteCsv from "@/components/DownloadWorksiteCsv";

  export default {
    name: 'BrowseWorksites',
    components: {
      DownloadWorksiteCsv,
      WorksiteDatatable
    }
  }
</script>

<template>
  <div class="animated fadeIn">
    <!--<WorksiteDatatable></WorksiteDatatable>-->
    <EventForm />
  </div>
</template>

<script>
  import WorksiteDatatable from '@/components/datatables/WorksiteDatatable';
  import EventForm from '@/components/form/EventForm';

  export default {
    name: 'MyOrganization',
    components: {
      EventForm
    }
  }
</script>

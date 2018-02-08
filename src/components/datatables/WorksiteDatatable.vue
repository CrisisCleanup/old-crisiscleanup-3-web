<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <h1>Event Worksites</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div id="myworksite-table">
          <div id="people">
            <v-server-table url="" :columns="columns" :options="options"></v-server-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ServerTable, Event} from 'vue-tables-2';
  import Vue from 'vue';

  Vue.use(ServerTable, {}, false, 'bootstrap4');

  export default {
    components: {},
    data() {
      return {
        columns: ['case_number', 'name', 'city', 'state', 'zip_code', 'work_type', 'status'],
        options: {
          responseAdapter: function(resp) {
            return {
              data: resp.data.results,
              count: resp.data.count
            }
          },
          requestFunction: function (data) {
            const d = {
              limit: data.limit,
              offset: (data.page * data.limit),
              legacy_event_id: 60,
              search: data.query
            };
            return this.axios.get('/worksites', {params: d});
          }
        }
      }
    }
  }
</script>

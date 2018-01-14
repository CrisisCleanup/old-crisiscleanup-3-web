<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col">
        <h1>Participating Organizations</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <div>
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
        columns: ['name', 'email', 'url', 'state'],
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
              // search: data.query
            };
            const uid = this.$store.state.worker.event.uid;
            return this.axios.get(`/events/${uid}/organizations`, {params: d});
          }
        }
      }
    }
  }
</script>

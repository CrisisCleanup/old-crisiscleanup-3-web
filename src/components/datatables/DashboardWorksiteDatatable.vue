<template>
  <div class="animated fadeIn">

    <div class="row">
      <div class="col-md-12">
        <div id="myworksite-table">
          <div id="people">
            <v-server-table url="" :columns="columns" :options="options" ref="dashboardWorksiteTable"></v-server-table>
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
    props: {
      filterStatus: {
        type: String
      },
      filterOpenClose: {
        type: String
      },
    },
    watch: {
      filterStatus: function (newVal, oldVal) {
        this.$refs.dashboardWorksiteTable.refresh();
      }
    },
    computed:{
      filterStatusInner: () => {
        return this.filterStatus;
      },
      filterOpenCloseInner: () => {
        return this.filterOpenClose;
      },
    },
    components: {},
    data() {
      return {
        columns: ['case_number', 'name', 'address', 'work_type'],
        options: {
          responseAdapter: function (resp) {
            return {
              data: resp.data.results,
              count: resp.data.count
            }
          },
          requestFunction: (data) => {
            const eid = this.$store.state.worker.event.id;
            const worksiteStatus = `${this.filterOpenClose}, ${this.filterStatus}`;
            console.log(worksiteStatus);
            const d = {
              limit: data.limit,
              offset: (data.page * data.limit),
              event: eid,
              search: data.query,
              status__icontains: worksiteStatus,

            };
            return this.axios.get('/worksites', {params: d});
          }
        }
      }
    }
  }
</script>

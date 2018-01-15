<template>
    <div class="row">
        <div class="mx-auto">
            <select v-model="selected" @change="setSiteStatus()">
                <option disabled value="">Please select one</option>
                <option>Open, unassigned</option>
                <option>Open, assigned</option>
                <option>Open, partially completed</option>
                <option>Open, needs follow-up</option>
                <option>Closed, completed</option>
                <option>Closed, incomplete</option>
                <option>Closed, out of scope</option>
                <option>Closed, done by others</option>
                <option>Closed, no help wanted</option>
                <option>Closed, rejected</option>
                <option>Closed, duplicate</option>
            </select>
        </div>
    </div>
</template>
<script>
  import DashboardEventHub from '@/events/DashboardEventHub'
  export default {
    name: 'site-status-dropdown',
    props: [
      'siteStatus',
      'siteId'
    ],
    methods: {
      setSiteStatus: function () {
        this.$http.post('/update-site-status' + this.siteId, {status: this.selected}).then(function (response) {
          DashboardEventHub.$emit('site-status-selected', [this.siteId, this.selected]);
        }, function (error) {
          Raven.captureException(error.toString());
        });
      }
    },
    data: function () {
      return {
        selected: this.siteStatus
      }
    }
  }
</script>

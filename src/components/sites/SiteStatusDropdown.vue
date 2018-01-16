<template>
    <div class="row">
        <div class="mx-auto">
            <select v-model="selected" @change="setSiteStatus()">
                <option disabled value="">{{ $t('actions.choose_one_select') }}</option>
                <option>{{ $t('status.open_unassigned') }}</option>
                <option>{{ $t('status.open_assigned') }}</option>
                <option>{{ $t('status.open_partially_completed') }}</option>
                <option>{{ $t('status.open_needs_follow_up') }}</option>
                <option>{{ $t('status.closed_completed') }}</option>
                <option>{{ $t('status.closed_incomplete') }}</option>
                <option>{{ $t('status.closed_out_of_scope') }}</option>
                <option>{{ $t('status.closed_done_by_others') }}</option>
                <option>{{ $t('status.closed_no_help_wanted') }}</option>
                <option>{{ $t('status.closed_rejected') }}</option>
                <option>{{ $t('status.closed_duplicate') }}</option>
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

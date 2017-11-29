<template>
  <div class="card">
    <div class="card-header text-center">
      {{siteData.case_number}}
    </div>
    <div class="card-block">
      <p class="card-text text-center"><site-icon :siteId="siteData.id" :site-status="siteData.status"></site-icon></p>
      <p class="card-text text-center"><b>{{siteData.name}}</b></p>
      <p class="card-text text-center"><small>{{siteData.address}}, {{siteData.city}}, {{siteData.state}}, {{siteData.zipCode}}</small></p>
      <site-status-dropdown :site-id="siteData.id" :site-status="siteData.status"></site-status-dropdown>
      <p class="card-text text-center">
          <i title="View on Map" class="fa fa-map fa-lg"></i>
          <i title="Send SMS" class="fa fa-mobile fa-lg"></i>
          <i title="Print worksite" class="fa fa-print fa-lg"></i>
      </p>
    </div>
  </div>
</template>

<script>
  import SiteStatusDropdown from './SiteStatusDropdown.vue';
  import SiteIcon from './SiteIcon.vue';

  export default {
    name: 'work-site',
    props: [
      'siteData'
    ],
    components: {
      SiteStatusDropdown,
      SiteIcon
    },
    data() {
      return {
      }
    },
    methods: {
      fireModal: function (siteId) {
        this.siteId = siteId;
        this.showModal = true;
      },
      cancelSend: function () {
        this.smsNumbers = '';
        this.showModal = false;
      },
      sendMessage: function () {
        var that = this;
        this.$http.post('messages/send_sms.json',
          JSON.stringify({type: 'site-info', siteId: this.siteId, numbers: this.smsNumbers}),
          {
            headers: {'content-type': 'application/json'}
          }).then(function (response) {
          that.smsNumbers = '';
          this.showModal = false;
        }, function (error) {
          that.hasError = true;
          Raven.captureException(error.toString());
        });
      }
    }
  }
</script>

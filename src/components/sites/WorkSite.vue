<template>
  <div class="card">
    <div class="card-header text-center">
      {{siteData.case_number}}
    </div>
    <div class="card-block">
      <p class="card-text text-center"><site-icon :siteId="siteData.id" :site-status="siteData.status"></site-icon></p>
      <p class="card-text text-center"><b>{{siteData.name}}</b></p>
      <p class="card-text text-center"><small>{{siteData.address}}</small></p>
      <p class="card-text text-center"><small>{{siteData.city}}, {{siteData.state}}, {{siteData.zipCode}}</small></p>
      <site-status-dropdown :site-id="siteData.id" :site-status="siteData.status"></site-status-dropdown>
      <div class="text-center" style="margin-top: 0.50rem;">
          <!--<div class="btn-group mx-auto" role="group">-->
            <a class="btn btn-light" href="#">
              <i title="View on Map" class="fa fa-map"></i>
            </a>
            <a class="btn btn-light" href="#">
              <i title="Send SMS" class="fa fa-mobile"></i>
            </a>
            <a class="btn btn-light" href="#">
              <i title="Print" class="fa fa-print"></i>
            </a>
          <!--</div>-->
      </div>
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

<style scoped>
  .card-block {
    padding: 0.25rem;
  }
  .card-text {
    margin-bottom: 0.25rem;
  }
</style>

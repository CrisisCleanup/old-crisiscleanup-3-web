<template>
  <div class="container-fluid main-window">
    <div class="row d-flex">
    <div class="col-md-6 col">
      <div class="card donor-cards">
        <div class="card-header">
          Donate Via Check
        </div>
        <div class="card-body  mb-2">
          <div class="row card-text">{{ $t('donate.checks_payable_msg') }}
          </div>
          <div class="row mb-2 card-text text-left">
            <strong>{{ $t('donate.mailing_address') }}:</strong>
            Crisis Cleanup, LLC<br />
            5905 Blue Mountain Circle<br />
            Longmont, CO 80503
          </div>
          <div class="row card-text mb-2">{{ $t('donate.receipts_mailed_msg') }}
          </div>
        </div>
      </div>
      <div class="card donor-cards">
        <div class="card-header">
          Corporate Giving
        </div>
        <div class="card-body">
          <div class="card-text">{{ $t('donate.corporate_donors_contact_msg') }} <a href="mailto: ross@crisiscleanup.org?Subject=Interested%20in%20supporting%20Crisis%20Cleanup" target="_top">ross@crisiscleanup.org</a>

          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col">
      <div class="card donor-cards">
        <div class="card-header">
          501c3
        </div>
        <div class="card-body">
          <img src="/static/img/front_end/logo-sahana.jpg" alt="The Sahana Foundation" class="card-img">
          <div><p>{{ $t('donate.sahana_accept_donations_msg') }}</p>
          <p>SAHANA Software Foundation<br />
          EIN: 27-0596562<br />
          350 S FIGUEROA ST STE 437<br />
          LOS ANGELES, CA 90071<br />
          USA</p>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            $<input type="text" class="donation-amount" placeholder="250">
          </div>

          <hr class="hr-style">
          <div class="row  justify-content-center">
            <a href="#/Donate" class="btn btn-primary m-2">{{ $t('donation.donate_card') }}</a>
            <a href="#/Donate" class="btn btn-primary m-2">{{ $t('donation.donate_monthly') }}</a>
          </div>
        </div>
      </div>

    </div>
    </div>
    </div>
  </div><!--End main loading window-->
</template>

<style lang="scss">
  // Import Main styles for this application
  @import "./scss/crisiscleanup/_donate.scss";
</style>


<script>
  export default {
    name: 'Donate',
    data() {
      return {};
    },
    computed: {
    },
    methods: {
    },
  };
</script>

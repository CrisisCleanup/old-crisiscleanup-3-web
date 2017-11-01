<template>
  <div class="container-fluid main-window">
    <div class="row d-flex">
    <div class="col-md-6 col">
      <div class="card donor-cards">
        <div class="card-header">
          Donate Via Check
        </div>
        <div class="card-body  mb-2">
          <div class="row card-text">Make checks payable to
            Crisis Cleanup.
          </div>
          <div class="row mb-2 card-text text-left">
            <strong>Mailing Address:</strong>
            Crisis Cleanup
            <br>
            5905 Blue Mountain Circle
            <br>
            Longmont, CO 80503
          </div>
          <div class="row card-text mb-2">Receipts will be mailed within
            6 weeks after the donation
            is processed.
          </div>
        </div>
      </div>
      <div class="card donor-cards">
        <div class="card-header">
          Corporate Giving
        </div>
        <div class="card-body">
          <div class="card-text">
          Join our list of distinguished
          corporate partenrs providing
          support to the Volunteers on
          on the ground


          Contact:
            <a href="mailto: ross@crisiscleanup.org?Subject=Interested%20in%20supporting%20Crisis%20Cleanup" target="_top">ross@crisiscleanup.org</a>

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
          <div>
            The SAHANA Software
            Foundation is the 501c3
            Fiscal Agent for Crisis Cleanup
          </div>
          <div>
            Name
          </div>
          <div>
            SAHANA SOFTWARE FOUNDATION
          </div>
          <div>
            EMPLOYER ID NUMBER (EIN)
          </div>
          <div>
            27-0596562
          </div>
          <div>
            ADDRESS
          </div>
          <div>
            350 S FIGUEROA ST STE 437
            LOS ANGELES, CA 90071
            USA
          </div>
          <div class="d-flex justify-content-center align-items-center">
            $<input type="text" class="donation-amount" placeholder="250">
          </div>

          <hr class="hr-style">
          <div class="row  justify-content-center">
            <a href="#/Donate" class="btn btn-primary m-2">Donate Via Card</a>
            <a href="#/Donate" class="btn btn-primary m-2">Donate Monthly</a>
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

<template>
  <!--<div class="container-fluid main-window">-->
  <Section id="go-donate" class="donation container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="text-center">
          <div><h2>{{ $t('donation.donate') }}</h2></div>
          <div class="volunteer-subtext">
            {{ $t('donation.your_donation_msg') }}
          </div>
          <img class="img-fluid mb-2" src="/static/img/front_end/movie-placeholder.png" alt="">
          <br>
          {{ $t('donation.turn_100_to_1000_msg') }}
        </div>
      </div>

      <div class="col-sm-12 col-md-6">
        <div class="col donor-levels">
          <div class="row">
            <div class="card donor-box w-100 mb-1">
              <div class="card-body p-0">
                <h4>{{ $t('donation.choose_level') }}</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card w-100 mb-1">
              <div class="card-body p-1">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item donor-level">
                    <button class="btn-primary">$25</button>
                  </li>
                  <li class="list-inline-item align-top"><img class="workers" src="/static/img/general_icons/worker1.png" v-bind:alt = "$t('donation.worker_1_alt')""></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card w-100 mb-1">
              <div class="card-body p-1">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item donor-level">
                    <button class="btn-primary">$100</button>
                  </li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker1.png" v-bind:alt = "$t('donation.worker_2_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker2.png" v-bind:alt = "$t('donation.worker_3_alt')"></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card w-100 mb-1">
              <div class="card-body p-1">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item donor-level">
                    <button class="btn-primary">$250</button>
                  </li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker1.png" v-bind:alt = "$t('donation.worker_1_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker2.png" v-bind:alt = "$t('donation.worker_2_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker3.png" v-bind:alt = "$t('donation.worker_3_alt')"></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card w-100 mb-1">
              <div class="card-body p-1">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item donor-level">
                    <button class="btn-primary">$500</button>
                  </li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker1.png" v-bind:alt = "$t('donation.worker_1_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker2.png" v-bind:alt = "$t('donation.worker_2_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker3.png" v-bind:alt = "$t('donation.worker_3_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker4.png" v-bind:alt = "$t('donation.worker_4_alt')"></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card w-100 mb-1">
              <div class="card-body p-0">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item donor-level">
                    <button class="btn-primary">$1,000</button>
                  </li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker1.png" v-bind:alt = "$t('donation.worker_1_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker2.png" v-bind:alt = "$t('donation.worker_2_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker3.png" v-bind:alt = "$t('donation.worker_3_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker4.png" v-bind:alt = "$t('donation.worker_4_alt')"></li>
                  <li class="list-inline-item"><img class="workers" src="/static/img/general_icons/worker5.png" v-bind:alt = "$t('donation.worker_5_alt')"></li>
                  <li class="list-inline-item"><img class="bobcat" src="/static/img/general_icons/bobcat.png" v-bind:alt = "$t('donation.bobcat_alt')"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex justify-content-center align-items-center">
            $<input type="text" class="donation-amount" placeholder="250">
          </div>

          <hr class="hr-style">
          <div class="row  justify-content-center">
            <router-link to="donate" class="btn btn-primary m-2">{{ $t('donation.donate_card') }}</router-link>
            <router-link to="donate" class="btn btn-primary m-2">{{ $t('donation.donate_monthly') }}</router-link>
          </div>
          <div class="row text-center pr-3 pl-3 mb-3">
            <a href="#">Give by check, bitcoin</a>, or donate through the <a href="#">SAHANA Software Foundation</a> for a tax-deductable donation.
          </div>
          <div class="row justify-content-center">
            <router-link to="roadmap" class="btn btn-primary m-2">{{ $t('donation.view_roadmap') }}</router-link>
            <router-link to="roadmap" class="btn btn-primary m-2">{{ $t('donation.view_numbers') }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </Section>  <!-- /Donations******************************* -->
  <!--</div>-->
</template>

<style lang="scss">
  @import "./scss/crisiscleanup/_donor.scss";
</style>


<script>
  export default {
    name: 'Donation',
    data() {
      return {};
    },
    computed: {},
    methods: {},
  }

</script>

<template>
  <div>

    <section id="go-whyccu" class="why-we-do">  <!-- ******************** Why we do it ********************* -->
      <div>
        <h2>{{ $t('whyCCU.why_we_do_it') }}</h2>
        <br>
      </div>

      <div id="whyCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#whyCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#whyCarousel" data-slide-to="1"></li>
          <li data-target="#whyCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">

            <div class="container">
              <div class="row">
                <div class="col-md-8 px-5">
                  <div>
                    <p>
                      {{ $t('whyCCU.rich_maseda_msg_p1') }}
                      <br><br>
                      {{ $t('whyCCU.rich_maseda_msg_p2') }}
                    </p>
                  </div>
                  <div>
                    <div class="p text-danger text-right pb-5">-Rich Maseda</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="img-fluid why-image rotatemobileleft" src="/static/img/stories/richmeseda.png" v-bind:alt = "$t('whyCCU.rich_daughter_alt')">
                </div>
              </div>
            </div>


          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-md-8">
                  <div>
                    <p>
                      {{ $t('whyCCU.nichole_schwartz_msg_p1') }}
                      <br><br>
                      {{ $t('whyCCU.nichole_schwartz_msg_p2') }}
                    </p>
                  </div>
                  <div>
                    <div class="p text-danger text-right">-Nichole Schwartz</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="img-fluid rotatemobileright" src="/static/img/stories/nicoleschwartz1.jpg" v-bind:alt = "$t('whyCCU.nicole_schwartz_alt')">
                </div>
              </div>
            </div>
          </div>


          <div class="carousel-item">

            <div class="container">
              <div class="row">
                <div class="col-md-8">
                  <div>
                    <p>
                      {{ $t('whyCCU.neil_glassman_msg_p1') }}</p>
                  </div>
                  <div>
                    <div class="p text-danger text-right">-Neil Glassman</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="img-fluid rotatemobileleft" src="/static/img/stories/neilglassman.jpeg" v-bind:alt = "$t('whyCCU.neil_glassman_alt')">
                </div>
              </div>
            </div>

          </div>
        </div>
        <a class="carousel-control-prev carouselp px-0" href="#whyCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">{{ $t('actions.previous') }}</span>
        </a>
        <a class="carousel-control-next carouseln" href="#whyCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">{{ $t('actions.next') }}</span>
        </a>
      </div>


    </section><!--End of the Why we do it Section-->

    <div class="temp-spacer" style="margin-top: 3em;"></div>


    <section id="go-join" class="how-to-join">  <!-- ******************** How to Join ********************* -->
      <div class="container">
        <div><h2>{{ $t('whyCCU.how_to_join') }}</h2>
          <br></div>
        <div class="row">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-6">
                <div class="card how-card">
                  <div class="card-header join-header text-center">{{ $t('whyCCU.survivors') }}</div>
                  <div class="card-body">
                    <p class="card-text">{{ $t('whyCCU.call_800_msg') }}
                    </p>
                  </div>
                  <div class="card-footer"><a href="#" class="btn btn-primary w-100">{{ $t('whyCCU.get_help') }}</a></div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card how-card">
                  <div class="card-header join-header text-center ">{{ $t('whyCCU.relief_organizations') }}</div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ $t('whyCCU.requirements') }}:
                    </p>
                    <ul>
                      <li>{{ $t('whyCCU.boots_on_ground') }}</li>
                      <li>{{ $t('whyCCU.interact_survivors') }}</li>
                      <li>{{ $t('whyCCU.work_of_this_type') }}</li>
                      <li>{{ $t('whyCCU.reputable') }}</li>
                      <li><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200603007-Requirements-for-Participation">{{ $t('whyCCU.full_details') }}</a></li>
                    </ul>
                  </div>
                  <div class="card-footer"><a href="#" class="btn btn-primary w-100">{{ $t('actions.register') }}</a></div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card how-card">
                  <div class="card-header join-header text-center">{{ $t('whyCCU.suv') }}</div>
                  <div class="card-body">
                    <p class="card-text">{{ $t('whyCCU.suv_join_org_msg') }}
                    </p>
                  </div>
                  <div class="card-footer"><a href="#" class="btn btn-primary w-100">{{ $t('actions.connect') }}</a></div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card how-card">
                  <div class="card-header join-header text-center">{{ $t('whyCCU.govt_agency') }}</div>
                  <div class="card-body">
                    <p class="card-text">{{ $t('whyCCU.govt_agency_join_msg') }}
                    </p>
                  </div>
                  <div class="card-footer"><a href="#" class="btn btn-primary w-100">{{ $t('actions.request') }}</a></div>
                </div>
              </div>
            </div>
          </div>
        </div><!--End of the main row-->
      </div><!--End of the Container -->
    </section><!--End of the How to Join Section-->

  </div>

</template>


<style lang="scss">
  // Import Main styles for this application
  @import "./scss/crisiscleanup/_donor.scss";
</style>


<script>
  export default {
    name: 'WhyCrisisCleanup',
    data() {
      return {};
    },
    computed: {},
    methods: {},
  }

</script>

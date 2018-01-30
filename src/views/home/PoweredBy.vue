<template>
  <div class="container-fluid main-window">

    <section id="go-poweredby" class="powered-by container-fluid">  <!-- ******************** Powered by ********************* -->
      <div class="row">
        <h2>{{ $t('poweredBy.powered_by') }}</h2>
      </div>
      <div class="row">
        <h4>{{ $t('poweredBy.contributors_major_2017') }}</h4>
      </div>
      <div class="row">
        <ul class="list-inline d-flex flex-wrap">  <!--d-flex plus flex-wrap fixes the nasty behavior when image cards and button cards dont want to line up.-->
          <li class="list-inline-item">
            <div class="card major-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-connectfirst.png" v-bind:alt = "$t('poweredBy.connectfirst_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Connect First</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card major-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-volunteerflorida@2x.png" v-bind:alt = "$t('poweredBy.vf_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Volunteer Florida</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card major-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-galleryfurniture.png" v-bind:alt = "$t('poweredBy.gallery_furniture_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Gallery Furniture</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card major-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-houston.png" v-bind:alt = "$t('poweredBy.houston_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">City of Houston</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card major-cards card-joinus bg-dark">
              <button class="btn-primary major-joinus">{{ $t('actions.join_us') }}</button>
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted"></small>
              </div>
            </div>
          </li>
          <!--<li class="list-inline-item">-->
            <!--<div class="card major-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="list-inline-item">-->
            <!--<div class="card major-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="list-inline-item">-->
            <!--<div class="card major-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="list-inline-item">-->
            <!--<div class="card major-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        </ul><!--end of un ordered list-->
      </div>


      <div class="row">
        <h4>{{ $t('poweredBy.contributors_major_past') }}</h4>
      </div>
      <div class="row">
        <ul class="list-inline d-flex flex-wrap">

          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-visionlink.jpg" v-bind:alt = "$t('poweredBy.visionlink_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">VisionLink</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-ldscharities.jpg" v-bind:alt = "$t('poweredBy.lds_charities_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">LDS Charities</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-connectfirst.png" v-bind:alt = "$t('poweredBy.connectfirst_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Connect First</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-umcor.jpg" v-bind:alt = "$t('poweredBy.umcor_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">UMCOR</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-sahana.jpg" v-bind:alt = "$t('poweredBy.sahana_foundation_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Sahana Foundation</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-nj211.jpg" v-bind:alt = "$t('poweredBy.nj211_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">NJ 2-1-1</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-howtoprepare.jpg" v-bind:alt = "$t('poweredBy.h2prep_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">How To Prepare for Everything</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/front_end/logo-thinkso.png" v-bind:alt = "$t('poweredBy.thinkso_logo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">ThinkSo</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards card-joinus bg-dark">
              <button class="btn-primary minor-joinus">{{ $t('actions.join_us') }}</button>
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted"></small>
              </div>
            </div>
          </li>
          <!--<li class="list-inline-item">-->
            <!--<div class="card minor-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="list-inline-item">-->
            <!--<div class="card minor-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="list-inline-item">-->
            <!--<div class="card minor-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="list-inline-item">-->
            <!--<div class="card minor-cards bg-dark">-->
              <!--<img class="card-img-top" src="/static/img/front_end/contactus.png" v-bind:alt = "$t('poweredBy.generic_card_alt')">-->
              <!--<div class="card-footer the-card-footer d-flex">-->
                <!--<small class="text-muted"></small>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        </ul><!--end of un ordered list-->
      </div><!--End of Key Contributors and Partners-->


      <div class="row">
        <h4>{{ $t('poweredBy.staff') }}</h4>
      </div>
      <div class="row">
        <ul class="list-inline d-flex flex-wrap">
          <li class="list-inline-item">
            <div class="card major-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-aarontitus.jpg" v-bind:alt = "$t('poweredBy.aaron_titus_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Aaron Titus</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card major-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-tylersanders.png" v-bind:alt = "$t('poweredBy.tyler_sanders_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Tyler Sanders</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card major-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-rossarroyo.jpg" v-bind:alt = "$t('poweredBy.ross_arroyo_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Ross Arroyo</small>
              </div>
            </div>
          </li>
        </ul><!--end of un ordered list-->
      </div><!--End of Staff-->


      <div class="row">
        <h4>{{ $t('poweredBy.staff_volunteers_former') }}</h4>
      </div>
      <div class="row">
        <ul class="list-inline d-flex flex-wrap">
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-andygimma.jpg" v-bind:alt = "$t('poweredBy.andy_gimma_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Andy Gimma</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-zacharystraub.jpg" v-bind:alt = "$t('poweredBy.zach_straub_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Zachary Straub</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-dhruvmehrotra.jpg" v-bind:alt = "$t('poweredBy.dhruv_mehrotra_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Druv Mehrota</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-marktregellas.jpg" v-bind:alt = "$t('poweredBy.mark_tregellas_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Mark Tregellas</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-chriswood.jpg" v-bind:alt = "$t('poweredBy.chris_wood_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Chris Wood</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-jeremypack.jpg" v-bind:alt = "$t('poweredBy.jeremy_pack_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Jeremy Pack</small>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <div class="card minor-cards bg-dark">
              <img class="card-img-top" src="/static/img/people/photo-brucechristensen.jpg" v-bind:alt = "$t('poweredBy.bruce_christensen_photo_alt')">
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted">Bruce Christensen</small>
              </div>
            </div>
          <li class="list-inline-item">
            <div class="card minor-cards card-joinus bg-dark">
              <a href="https://github.com/CrisisCleanup/crisiscleanup" target="_blank" class="btn-primary minor-joinus">{{ $t('actions.join_us') }}</a>
              <div class="card-footer the-card-footer d-flex">
                <small class="text-muted"></small>
              </div>
            </div>
          </li>
        </ul><!--end of un ordered list-->
      </div><!--End of Major Volunteers-->
    </section>  <!-- ******************** END Powered by ********************* -->

    <div class="parallax parallax-donor"></div>

    <section id="go-whoweserve" class="who-we-serve">  <!-- ******************** Who We Serve ********************* -->
      <div class="container">
        <div class="row">
          <h2>{{ $t('poweredBy.who_we_serve') }}</h2>
        </div>
        <div class="row mb-2" >
          <h6>{{ $t('poweredBy.ccu_serves_orgs_msg') }}</h6>
        </div>
        <div class="row">
          <div class="who-card-columns card-columns">

            <div class="org-cards card">
              <div class="card-header text-center">All Hands Volunteers</div>
              <div class="card-body">
                <p class="card-text">Hurricane Irma; Hurricane Harvey; MO Flooding May 2017; S. GA Tornadoes Jan 2017; Hattiesburg-Petal Tornado; Gatlinburg, TN Fire; Hurricane Matthew (All States); LA-MS Flood Aug 2016; May 2016 TX Floods; SC Fast Track Repairs; SE Michigan Floods; Texas-Oklahoma Floods; LA-MS-TX Flooding March 2016; Oct 2015 East Coast Floods; Eastcoast Snowstorms; Southern Tornadoes Dec 2015; Midwest Winter Floods; Midwest Tornadoes; Colorado Floods; Hurricane Sandy Recovery
                </p>
              </div>
            </div>
            <div class="org-testimonial card">
              <div class="card-header  text-center">Team Rubicon</div>
              <div class="card-body">
                <p class="card-text">{{ $t('poweredBy.kelly_darden_quote') }}
                </p>
                <div class="card-text text-right"> - Kelly Darden</div>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">Convoy of Hope</div>
              <div class="card-body">
                <p class="card-text">Hurricane Irma; Hurricane Harvey; Illinois-Wisconsin Floods Jul 2017; Mid-MI Floods June 2017; MO Flooding May 2017; S. GA Tornadoes Jan 2017; Hattiesburg-Petal Tornado; Hurricane Matthew (All States); LA-MS Flood Aug 2016; May 2016 TX Floods; SE TX Floods April 2016; Texas-Oklahoma Floods; LA-MS-TX Flooding March 2016; Oct 2015 East Coast Floods; Southern Tornadoes Dec 2015; Midwest Winter Floods; Colorado Floods; Moore, OK Tornado; Hurricane Sandy Recovery
                </p>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">Disaster Aid USA</div>
              <div class="card-body">
                <p class="card-text">Hurricane Harvey; May 2016 TX Floods; SE TX Floods April 2016
                </p>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">Friendswood Friends Church</div>
              <div class="card-body">
                <p class="card-text">Hurricane Harvey
                </p>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">LDS Church-Cedar Park TX Stake</div>
              <div class="card-body">
                <p class="card-text">Hurricane Harvey; Holmes County, MS Tornadoes May 2017; May 2016 TX Floods; SE TX Floods April 2016; Oct 2015 TX Floods
                </p>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">LDS Church-Hattiesburg Mississippi Stake</div>
              <div class="card-body">
                <p class="card-text">Hurricane Nate; Hurricane Irma; Hurricane Harvey; S. GA Tornadoes Jan 2017; Hattiesburg-Petal Tornado; Gatlinburg, TN Fire; Hurricane Matthew (All States); LA-MS Flood Aug 2016; Columbia, MS Tornado
                </p>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">Revelation Glory Church</div>
              <div class="card-body">
                <p class="card-text">Hurricane Harvey
                </p>
              </div>
            </div>
            <div class="org-testimonial card">
              <div class="card-header  text-center">LDS Church - Oak Hills Stake</div>
              <div class="card-body">
                <p class="card-text">{{ $t('poweredBy.steven_hunt_quote') }}
                </p>
                <div class="card-text text-right"> - Steven Hunt</div>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">Riverside Church</div>
              <div class="card-body">
                <p class="card-text">Hurricane Irma
                </p>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">NECHAMA Jewish Response To Disaster</div>
              <div class="card-body">
                <p class="card-text">Hurricane Maria; Hurricane Irma; Hurricane Harvey; Illinois-Wisconsin Floods Jul 2017; Mid-MI Floods June 2017; MO Flooding May 2017; East Texas Tornadoes, April 2017; New Orleans Tornadoes Feb. 2017; S. GA Tornadoes Jan 2017; Hattiesburg-Petal Tornado; Hurricane Matthew (All States); MN-WI-IA Flood Sep 2016; LA-MS Flood Aug 2016; MN Storms July 2016; WV/VA June 2016 Flood; May 2016 TX Floods; SE TX Floods April 2016; Texas-Oklahoma Floods; Oct 2015 TX Floods; LA-MS-TX Flooding March 2016; Oct 2015 East Coast Floods; Eastcoast Snowstorms; Northern Illinois Tornadoes; Southern Tornadoes Dec 2015; Midwest Winter Floods; Midwest Tornadoes; Colorado Floods; Hurricane Sandy Recovery</p>
              </div>
            </div>
            <div class="org-cards card">
              <div class="card-header bg-inverse text-center">Team Rubicon USA</div>
              <div class="card-body">
                <p class="card-text">Hurricane Irma; Hurricane Harvey; West Virginia Flood, Jul 2017; Illinois-Wisconsin Floods Jul 2017; Mid-MI Floods June 2017; NW WI Tornado, May 2017; Holmes County, MS Tornadoes May 2017; MO Flooding May 2017; East Texas Tornadoes, April 2017; IL Tornadoes Feb 2017; San Antonio TX Tornadoes; New Orleans Tornadoes Feb. 2017; S. GA Tornadoes Jan 2017; Hattiesburg-Petal Tornado; So CO Winds; Gatlinburg, TN Fire; Hurricane Hermine; Hurricane Matthew (All States); MN-WI-IA Flood Sep 2016; Wyoming, MI Tornado Aug 2016; LA-MS Flood Aug 2016; South Holland IL Flood; Roaring Lion Fire; WV Minor Repairs Jun 2016; MN Storms July 2016; Nederland-Cold Springs Fire; WV/VA June 2016 Flood; Ft. McMurray, Alberta Fire; SE TX Floods April 2016; Columbia, MS Tornado; Texas-Oklahoma Floods; VA Tornadoes; Oct 2015 TX Floods; LA-MS-TX Flooding March 2016; Oct 2015 East Coast Floods; Eastcoast Snowstorms; NJ Coastal Floods Jan 2016; Southern Tornadoes Dec 2015; Midwest Winter Floods; Midwest Tornadoes; Colorado Floods; Hurricane Sandy Recovery
                </p>
              </div>
            </div>

          </div><!--End of the card-column-->
        </div><!--End of The Row containing the Orgs-->
      </div><!--End of the Contiiner-->
    </section><!--End of the Who We Serve By Section-->

    <div class="temp-spacer" style="margin-top: 3em;"></div>


  </div>
</template>


<style lang="scss">
  // Import Main styles for this application
  @import "./scss/crisiscleanup/_donor.scss";


</style>


<script>
  export default {
    name: 'PoweredBy',
    data() {
      return {};
    },
    computed: {
    },
    methods: {
    },
  }

</script>

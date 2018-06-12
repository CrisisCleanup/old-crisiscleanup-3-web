<template>
  <div class="container" style="margin-top: 55px;">


    <Section class="roadmap-header">
      <h2 v-html="roadmap.mission_roadmap') }}</h2>
    </Section>
    <section class="roadmap-expansion">
      <div id="accordion" role="tablist">

        <!--Fully Integrated Call Center system-->
        <div class="card">
          <div class="card-header" role="tab" id="headingOne">
            <h5 class="mb-0">
              <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {{ $t('roadmap.integrated_call_system') }}
              </a>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne"
               data-parent="#accordion">
            <div class="card-body">
              <col-2>
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-phone1.png" alt="">
              </col-2>
              <col-2>
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-phone2.png" alt="">
              </col-2>
              <col-2>
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-phone3.png" alt="">
              </col-2>
              <col-6>
                <row>
                  {{ $t('roadmap.integrated_call_system_msg') }}
                </row>
                <row>
                  <button class="btn-primary">{{ $t('roadmap.send_feedback') }}</button>
                </row>
              </col-6>
              <img src="/static/img/front_end/roadmap-phone4.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>

        <!--Robust Multi-Lingual Support-->
        <div class="card">
          <div class="card-header" role="tab" id="headingTwo">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="true"
                 aria-controls="collapseTwo">
                {{ $t('roadmap.multi_lingual_support') }}
              </a>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo"
               data-parent="#accordion">
            <div class="card-body">
              <row>
                <col-2>
                  <img src="/static/img/front_end/roadmap-multilanguage1.png" alt="" class="img-fluid">
                </col-2>
                <col-6>
                  <row>
                    <p>
                      {{ $t('roadmap.multi_lingual_support_msg') }}
                    </p>
                  </row>
                  <row>
                    <img src="/static/img/front_end/roadmap-multilanguage2.png" alt="" class="img-fluid">
                  </row>
                  <row>
                    <button class="btn-primary">{{ $t('roadmap.send_feedback') }}</button>
                  </row>
                </col-6>
              </row>
            </div>
          </div>
        </div>

        <!--Crew and Heavy Equipment Management-->
        <div class="card">
          <div class="card-header" role="tab" id="headingThree">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="true"
                 aria-controls="collapseThree">
                {{ $t('roadmap.crew_equipment_management') }}
              </a>
            </h5>
          </div>
          <div id="collapseThree" class="collapse show" role="tabpanel" aria-labelledby="headingThree"
               data-parent="#accordion">
            <div class="card-body">
              <col-6>
                <p v-html="roadmap.crew_equipment_management_msg"></p>
                <p v-html="roadmap.crew_equipment_management_msg2"></p>
              </col-6>
              <col-6>
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-crewman.png" alt="">
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-crewman.png" alt="">
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-crewbobcat.png" alt="">
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-crewman.png" alt="">
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-crewbobcat.png" alt="">
                <img class="img-fluid align-top" src="/static/img/front_end/roadmap-crews1.png" alt="">
              </col-6>
            </div>
          </div>
        </div>

        <!--Improved Critical Needs Identification-->
        <div class="card">
          <div class="card-header" role="tab" id="headingFour">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true"
                 aria-controls="collapseFour">
                {{ $t('roadmap.critical_needs') }}
              </a>
            </h5>
          </div>
          <div id="collapseFour" class="collapse show" role="tabpanel" aria-labelledby="headingFour"
               data-parent="#accordion">
            <div class="card-body">
              <row>
                <col-6>
                  <p v-html="roadmap.critical_needs_msg"></p>
                </col-6>
                <col-6>
                  <!--To add: Service Opportunity Search Filters go here-->
                </col-6>
              </row>
              <row>
                <col-6>
                  <img src="/static/img/front_end/roadmap-layers1.png" alt="" class="img-fluid">
                </col-6>
                <col-6>
                  <img src="/static/img/front_end/roadmap-layers2.png" alt="" class="img-fluid">
                </col-6>
              </row>
            </div>
          </div>
        </div>

        <!--Suvivor Advocacy Tools-->
        <div class="card">
          <div class="card-header" role="tab" id="headingFive">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="true"
                 aria-controls="collapseFive">
                {{ $t('roadmap.survivor_advocacy') }}
              </a>
            </h5>
          </div>
          <div id="collapseFive" class="collapse show" role="tabpanel" aria-labelledby="headingFive"
               data-parent="#accordion">
            <div class="card-body">
              <col-6>
                <div class="card">
                  <div class="card-header">
                    <H4>
                      {{ $t('roadmap.urgent_needs') }}
                    </H4>
                  </div>
                  <div class="card-body">
                    <!--To add: Stuff goes here.-->
                  </div>
                </div>
              </col-6>
              <row>
                <col-6>
                  <!--To add: Service Opportunity Filger goes here blurred out-->
                  <br>
                  <!--To add: Alert me goes here-->
                </col-6>
              </row>
              <row>
                <p v-html="roadmap.urgent_needs_msg"></p>
              </row>
            </div>
          </div>
        </div>

        <!--Social Tools Inegration (Hero Stories)-->
        <div class="card">
          <div class="card-header" role="tab" id="headingSix">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseSix" aria-expanded="true"
                 aria-controls="collapseSix">
                {{ $t('roadmap.hero_stories') }}
              </a>
            </h5>
          </div>
          <div id="collapseSix" class="collapse show" role="tabpanel" aria-labelledby="headingSix"
               data-parent="#accordion">
            <div class="card-body">
              <col-4>
                <p v-html="roadmap.hero_stories_msg"></p>
              </col-4>
              <col-8>
                <img src="/static/img/front_end/roadmap-social.png" alt="" class="img-fluid">
              </col-8>
            </div>
          </div>
        </div>

        <!--Photo Reconnaissance-->
        <div class="card">
          <div class="card-header" role="tab" id="headingSeven">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseSeven" aria-expanded="true"
                 aria-controls="collapseSeven">
                {{ $t('roadmap.photo_recon') }}
              </a>
            </h5>
          </div>
          <div id="collapseSeven" class="collapse show" role="tabpanel" aria-labelledby="headingSeven"
               data-parent="#accordion">
            <div class="card-body">
              <row>
                <col>
                <row><img src="/static/img/front_end/roadmap-recon1.png" alt="" class="img-fluid"></row>
                <row>
                  <p v-html="roadmap.photo_recon_msg1"></p>
                </row>
                <col>
                <row><img src="/static/img/front_end/roadmap-recon2.png" alt="" class="img-fluid"></row>
                <row>
                  <p v-html="roadmap.photo_recon_msg2"></p>
                </row>
                <col>
                <row>
                  <p v-html="roadmap.photo_recon_msg3"></p>
                </row>
              </row>
              <row>
                <img src="/static/img/front_end/roadmap-recon3.png" alt="" class="img-fluid">
                <img src="/static/img/front_end/roadmap-recon4.png" alt="" class="img-fluid">
                <img src="/static/img/front_end/roadmap-recon5.png" alt="" class="img-fluid">
              </row>
            </div>
          </div>
        </div>

        <!--Online Training Center-->
        <div class="card">
          <div class="card-header" role="tab" id="headingEight">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="true"
                 aria-controls="collapseEight">
                {{ $t('roadmap.online_training') }}
              </a>
            </h5>
          </div>
          <div id="collapseEight" class="collapse show" role="tabpanel" aria-labelledby="headingEight"
               data-parent="#accordion">
            <div class="card-body">
              <col-4>
                <row>
                  <p v-html="roadmap.online_training_msg"></p>
                </row>
                <row>
                  <img src="/static/img/front_end/roadmap-training1.png" alt="" class="img-fluid">
                </row>
              </col-4>
              <col-4><img src="/static/img/front_end/roadmap-training2.png" alt="" class="img-fluid"></col-4>
              <col-4><img src="/static/img/front_end/roadmap-training3.png" alt="" class="img-fluid"></col-4>
            </div>
          </div>
        </div>

        <!--Infrastructure, Communications, Interconnectivity Improvements-->
        <div class="card">
          <div class="card-header" role="tab" id="headingEight">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="true"
                 aria-controls="collapseEight">
                {{ $t('roadmap.communications_improvements') }}
              </a>
            </h5>
          </div>
          <div id="collapseEight" class="collapse show" role="tabpanel" aria-labelledby="headingEight"
               data-parent="#accordion">
            <div class="card-body">
              <row>
                <p v-html="roadmap.communications_improvements_msg"></p>
              </row>
              <row>
                <ul>
                  <li v-html="roadmap.communications_improvements_li1"></li>
                  <li v-html="roadmap.communications_improvements_li2"></li>
                  <li v-html="roadmap.communications_improvements_li3"></li>
                  <li v-html="roadmap.communications_improvements_li4"></li>
                  <li v-html="roadmap.communications_improvements_li5"></li>
                  <li v-html="roadmap.communications_improvements_li6"></li>
                  <li v-html="roadmap.communications_improvements_li7"></li>
                  <li v-html="roadmap.communications_improvements_li8"></li>
                  <li v-html="roadmap.communications_improvements_li9"></li>
                  <li v-html="roadmap.communications_improvements_li10"></li>
                  <li v-html="roadmap.communications_improvements_li11"></li>
                </ul>
              </row>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>


<style lang="scss">
  // Import Main styles for this application
  @import "./scss/crisiscleanup/_roadmap.scss";
</style>


<script>
  export default {
    name: 'Roadmap',
    data() {
      return {
        roadmap: {
          mission_roadmap: this.$t('roadmap.mission_roadmap'),
          integrated_call_system: this.$t('roadmap.integrated_call_system'),
          integrated_call_system_msg: this.$t('roadmap.integrated_call_system_msg'),
          send_feedback: this.$t('roadmap.send_feedback'),
          multi_lingual_support: this.$t('roadmap.multi_lingual_support'),
          multi_lingual_support_msg: this.$t('roadmap.multi_lingual_support_msg'),
          crew_equipment_management: this.$t('roadmap.crew_equipment_management'),
          crew_equipment_management_msg: this.$t('roadmap.crew_equipment_management_msg'),
          crew_equipment_management_msg2: this.$t('roadmap.crew_equipment_management_msg2'),
          critical_needs: this.$t('roadmap.critical_needs'),
          critical_needs_msg: this.$t('roadmap.critical_needs_msg'),
          survivor_advocacy: this.$t('roadmap.survivor_advocacy'),
          urgent_needs: this.$t('roadmap.urgent_needs'),
          urgent_needs_msg: this.$t('roadmap.urgent_needs_msg'),
          hero_stories: this.$t('roadmap.hero_stories'),
          hero_stories_msg: this.$t('roadmap.hero_stories_msg'),
          photo_recon: this.$t('roadmap.photo_recon'),
          photo_recon_msg1: this.$t('roadmap.photo_recon_msg1'),
          photo_recon_msg2: this.$t('roadmap.photo_recon_msg2'),
          photo_recon_msg3: this.$t('roadmap.photo_recon_msg3'),
          online_training: this.$t('roadmap.online_training'),
          online_training_msg: this.$t('roadmap.online_training_msg'),
          communications_improvements: this.$t('roadmap.communications_improvements'),
          communications_improvements_msg: this.$t('roadmap.communications_improvements_msg'),
          communications_improvements_li1: this.$t('roadmap.communications_improvements_li1'),
          communications_improvements_li2: this.$t('roadmap.communications_improvements_li2'),
          communications_improvements_li3: this.$t('roadmap.communications_improvements_li3'),
          communications_improvements_li4: this.$t('roadmap.communications_improvements_li4'),
          communications_improvements_li5: this.$t('roadmap.communications_improvements_li5'),
          communications_improvements_li6: this.$t('roadmap.communications_improvements_li6'),
          communications_improvements_li7: this.$t('roadmap.communications_improvements_li7'),
          communications_improvements_li8: this.$t('roadmap.communications_improvements_li8'),
          communications_improvements_li9: this.$t('roadmap.communications_improvements_li9'),
          communications_improvements_li10: this.$t('roadmap.communications_improvements_li10'),
          communications_improvements_li11: this.$t('roadmap.communications_improvements_li11')
        }
      }
    },
    computed: {},
    methods: {},
  };
</script>

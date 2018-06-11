<template>
  <div class="app flex-row align-items-center">
    <div class="app-body">
      <div class="container">
        <div class="card mx-4">
          <div class="card-body p-4">
            <div class="col-md-12">
              <div class="row subheader">
                <div class="small-12 medium-8 large-10 columns">
                  <h1 v-html="aboutHeader"></h1>
                  <h4 class="basic" v-html="philosophyNotTech"></h4>
                  <hr class="medium">
                  <p><strong v-html="mission"></strong></p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="small-12 medium-12 large-12 columns">
                <iframe width="800" height="400" src="https://www.youtube.com/embed/yCxI5YHyX5k" frameborder="0" allowfullscreen></iframe>
                <p v-html="helpMorePeople"></p>
                <p v-html="ccuBenefits"></p>
                <p v-html="fourCsRs"></p>
                <p v-html="propertyNotPeople"></p>

                <h5 v-html="transparentCollaborativePrivacy"></h5>
                <p v-html="ccuLlcOpenSource"></p>

                <h4 v-html="foundationalPhilosophies"></h4>
                <ul>
                  <li v-html="rightWayGetItDone"></li>
                  <li v-html="techEnhanceRelationships"></li>
                  <li v-html="noPyramid"></li>
                  <li v-html="collabCommConvenientRequired"></li>
                  <li v-html="oneAppRuleAll"></li>
                  <li v-html="dataMinimization"></li>
                </ul>
                <p v-html="innovationIsCoordination"></p>
                <h3 v-html="testimonials"></h3>
                <iframe width="800" height="400" src="https://www.youtube.com/embed/yhfWOPoY5hk" frameborder="0" allowfullscreen></iframe>
                <h3 v-html="helpfulLinks"></h3>
                <ul>
                  <li><a href="https://crisiscleanup-demo.herokuapp.com/" v-html="ccuDemo"></a></li>
                  <li><a href="/training" v-html="mandatoryTraining"></a></li>
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200603007-Requirements-for-Participation" v-html="reqForParticipation"></a></li>
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200596493-Is-Crisis-Cleanup-a-Good-Fit-" v-html="goodFit"></a> <span v-html="factorsSuccess"></span>
                  </li>
                  <!--<li><a href="https://www.crisiscleanup.org/donate">{{ $t('about.contribute') }}</a></li>-->
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us" v-html="helpdesk"></a></li>
                </ul>
                <h3 v-html="ccuStory"></h3>
                <p v-html="h2PrepLink"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        aboutHeader: this.$i18n.t('about.about_header'),
        philosophyNotTech: this.$i18n.t('about.philosophy_not_tech'),
        mission: this.$i18n.t('about.mission'),
        helpMorePeople: this.$i18n.t('about.help_more_people'),
        ccuBenefits: this.$i18n.t('about.ccu_benefits'),
        fourCsRs: this.$i18n.t('about.four_cs_rs'),
        propertyNotPeople: this.$i18n.t('about.property_not_people'),
        transparentCollaborativePrivacy: this.$i18n.t('about.transparent_collaborative_privacy'),
        ccuLlcOpenSource: this.$i18n.t('about.ccu_llc_open_source'),
        foundationalPhilosophies: this.$i18n.t('about.foundational_philosophies'),
        rightWayGetItDone: this.$i18n.t('about.right_way_get_it_done'),
        techEnhanceRelationships: this.$i18n.t('about.tech_enhance_relationships'),
        noPyramid: this.$i18n.t('about.no_pyramid'),
        collabCommConvenientRequired: this.$i18n.t('about.collab_comm_convenient_required'),
        oneAppRuleAll: this.$i18n.t('about.one_app_rule_all'),
        dataMinimization: this.$i18n.t('about.data_minimization'),
        innovationIsCoordination: this.$i18n.t('about.innovation_is_coordination'),
        testimonials: this.$i18n.t('about.testimonials'),
        helpfulLinks: this.$i18n.t('about.helpful_links'),
        ccuDemo: this.$i18n.t('about.ccu_demo'),
        mandatoryTraining: this.$i18n.t('about.mandatory_training'),
        reqForParticipation: this.$i18n.t('about.req_for_participation'),
        goodFit: this.$i18n.t('about.good_fit'),
        factorsSuccess: this.$i18n.t('about.factors_success'),
        helpdesk: this.$i18n.t('about.helpdesk'),
        ccuStory: this.$i18n.t('about.ccu_story'),
        h2PrepLink: this.$i18n.t('about.h2prep_link')
      }
    },
    components: {},
    mounted() {},
    computed: {
      // h2PrepLink() {
      //   return $t('about.h2prep_link')
      // }
    },
    methods: {}
  }
</script>

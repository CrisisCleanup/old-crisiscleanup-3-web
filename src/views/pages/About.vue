<template>
  <div class="app flex-row align-items-center">
    <div class="app-body">
      <div class="container">
        <div class="card mx-4">
          <div class="card-body p-4">
            <div class="col-md-12">
              <div class="row subheader">
                <div class="small-12 medium-8 large-10 columns">
                  <h1 v-html="about.about_header"></h1>
                  <h4 class="basic" v-html="about.philosophy_not_tech"></h4>
                  <hr class="medium">
                  <p><strong v-html="about.mission"></strong></p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="small-12 medium-12 large-12 columns">
                <iframe width="800" height="400" src="https://www.youtube.com/embed/yCxI5YHyX5k" frameborder="0" allowfullscreen></iframe>
                <p v-html="about.help_more_people"></p>
                <p v-html="about.ccu_benefits"></p>
                <p v-html="about.four_cs_rs"></p>
                <p v-html="about.propert_not_people"></p>

                <h5 v-html="about.transparent_collaborative_privacy"></h5>
                <p v-html="about.ccu_llc_open_source"></p>

                <h4 v-html="about.foundational_philosophies"></h4>
                <ul>
                  <li v-html="about.rightWay_get_it_done"></li>
                  <li v-html="about.tech_enhance_relationships"></li>
                  <li v-html="about.no_pyramid"></li>
                  <li v-html="about.collab_comm_convenient_required"></li>
                  <li v-html="about.one_app_rule_all"></li>
                  <li v-html="about.data_minimization"></li>
                </ul>
                <p v-html="about.innovation_is_coordination"></p>
                <h3 v-html="about.testimonials"></h3>
                <iframe width="800" height="400" src="https://www.youtube.com/embed/yhfWOPoY5hk" frameborder="0" allowfullscreen></iframe>
                <h3 v-html="about.helpful_links"></h3>
                <ul>
                  <li><a href="https://crisiscleanup-demo.herokuapp.com/" v-html="about.ccu_demo"></a></li>
                  <li><a href="/training" v-html="about.mandatory_training"></a></li>
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200603007-Requirements-for-Participation" v-html="about.req_for_participation"></a></li>
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200596493-Is-Crisis-Cleanup-a-Good-Fit-" v-html="about.good_fit"></a> <span v-html="about.factors_success"></span>
                  </li>
                  <!--<li><a href="https://www.crisiscleanup.org/donate">{{ $t('about.contribute') }}</a></li>-->
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us" v-html="about.helpdesk"></a></li>
                </ul>
                <h3 v-html="about.ccu_story"></h3>
                <p v-html="about.h2prep_link"></p>
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
        about: {
          about_header: this.$t('about.about_header'),
          philosophy_not_tech: this.$t('about.philosophy_not_tech'),
          mission: this.$t('about.mission'),
          help_more_people: this.$t('about.help_more_people'),
          ccu_benefits: this.$t('about.ccu_benefits'),
          four_cs_rs: this.$t('about.four_cs_rs'),
          property_not_people: this.$t('about.property_not_people'),
          transparent_collaborative_privacy: this.$t('about.transparent_collaborative_privacy'),
          ccu_llc_open_source: this.$t('about.ccu_llc_open_source'),
          foundational_philosophies: this.$t('about.foundational_philosophies'),
          right_way_get_it_done: this.$t('about.right_way_get_it_done'),
          tech_enhance_relationships: this.$t('about.tech_enhance_relationships'),
          no_pyramid: this.$t('about.no_pyramid'),
          collab_comm_convenient_required: this.$t('about.collab_comm_convenient_required'),
          one_app_rule_all: this.$t('about.one_app_rule_all'),
          data_minimization: this.$t('about.data_minimization'),
          innovation_is_coordination: this.$t('about.innovation_is_coordination'),
          testimonials: this.$t('about.testimonials'),
          helpful_links: this.$t('about.helpful_links'),
          ccu_demo: this.$t('about.ccu_demo'),
          mandatory_training: this.$t('about.mandatory_training'),
          req_for_participation: this.$t('about.req_for_participation'),
          good_fit: this.$t('about.good_fit'),
          factors_success: this.$t('about.factors_success'),
          helpdesk: this.$t('about.helpdesk'),
          ccu_story: this.$t('about.ccu_story'),
          h2prep_link: this.$t('about.h2prep_link')
        }
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

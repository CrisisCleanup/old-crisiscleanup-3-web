<template>
  <div class="app flex-row align-items-center">
    <div class="app-body">
      <div class="container">
        <div class="card mx-4">
          <div class="card-body p-4">
            <div class="col-md-12">
              <div class="row subheader">
                <div class="small-12 medium-8 large-10 columns">
                  <h1>{{ $t('about.about_header') }}</h1>
                  <h4 class="basic">{{ $t('about.philosophy_not_tech') }}</h4>
                  <hr class="medium">
                  <p><strong>{{ $t('about.mission') }}</strong></p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="small-12 medium-12 large-12 columns">
                <iframe width="800" height="400" src="https://www.youtube.com/embed/yCxI5YHyX5k" frameborder="0" allowfullscreen></iframe>
                <p>{{ $t('about.help_more_people') }}</p>
                <p>{{ $t('about.ccu_benefits') }}</p>
                <p>{{ $t('about.four_cs_rs') }}</p>
                <p>{{ $t('about.property_not_people') }}</p>

                <h5>{{ $t('about.transparent_collaborative_privacy') }}</h5>
                <p>{{ $t('about.ccu_llc_open_source') }}</p>

                <h4>{{ $t('about.foundational_philosophies') }}</h4>
                <ul>
                  <li>{{ $t('about.right_way_get_it_done') }}</li>
                  <li>{{ $t('about.tech_enhance_relationships') }}</li>
                  <li>{{ $t('about.no_pyramid') }}</li>
                  <li>{{ $t('about.collab_comm_convenient_required') }}</li>
                  <li>{{ $t('about.one_app_rule_all') }}</li>
                  <li>{{ $t('about.data_minimization') }}</li>
                </ul>
                <p>{{ $t('about.innovation_is_coordination') }}</p>
                <h3>{{ $t('about.testimonials') }}</h3>
                <iframe width="800" height="400" src="https://www.youtube.com/embed/yhfWOPoY5hk" frameborder="0" allowfullscreen></iframe>
                <h3>{{ $t('about.helpful_links') }}</h3>
                <ul>
                  <li><a href="https://crisiscleanup-demo.herokuapp.com/">{{ $t('about.ccu_demo') }}</a></li>
                  <li><a href="/training">{{ $t('about.mandatory_training') }}</a></li>
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200603007-Requirements-for-Participation">{{ $t('about.req_for_participation') }}</a></li>
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200596493-Is-Crisis-Cleanup-a-Good-Fit-">
                    {{ $t('about.good_fit') }}</a> {{ $t('about.factors_success') }}
                  </li>
                  <!--<li><a href="https://www.crisiscleanup.org/donate">{{ $t('about.contribute') }}</a></li>-->
                  <li><a href="https://crisiscleanup.zendesk.com/hc/en-us">{{ $t('about.helpdesk') }}</a></li>
                </ul>
                <h3>{{ $t('about.ccu_story') }}</h3>
                <p>{{ $t('about.h2prep_link') }}</p>
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
  name: 'About'
}
</script>

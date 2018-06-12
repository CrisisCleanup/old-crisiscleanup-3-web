<template>
  <footer>
    <div class="container-fluid">
      <div class="row" id="footer-row">
        <div class="col-md-3 footer-logo">
          <a href="/"><img src="/static/img/ccu-logo-white.png" class="img-fluid"></a>
          <h5 v-html="largeFooter.ready_to_deploy_msg"></h5>
          <p v-html="largeFooter.ccu_open_source"></p>
          <!--
          <ul class="sms-icons">
            <li><a href="https://www.facebook.com/Crisis-Cleanup-437690172982553/"><i class="fa fa-facebook"></i></a>
            </li>
            <li><a href="https://twitter.com/crisiscleanup"><i class="fa fa-twitter"></i></a></li>
            <li><a href="/contact"><i class="fa fa-envelope"></i></a></li>
          </ul>
          -->
        </div>
        <div class="col-md-3">
          <i class="fa fa-rocket"></i>
          <h4 v-html="largeFooter.ccu_deployments"></h4>
          <p v-html="largeFooter.dozens_disasters_msg"></p>
          <a href="http://blog.crisiscleanup.org/2013/11/all-crisis-cleanup-incidents.html">{{ $t('largeFooter.all_deployments_msg') }}</a>
        </div>
        <div class="col-md-3">
          <i class="fa fa-video-camera "></i>
          <h4 v-html="largeFooter.media_coverage"></h4>
          <p v-html="largeFooter.no_spotlight_msg"></p>
          <a href="http://blog.crisiscleanup.org/2013/07/crisis-cleanup-media-coverage.html">{{ $t('largeFooter.in_the_news_msg') }}</a>
        </div>
        <div class="col-md-3">
          <i class="fa fa-heart"></i>
          <h4 v-html="largeFooter.want_to_help"></h4>
          <p v-html="largeFooter.ccu_volunteer_dev"></p>
          <a href="https://www.patreon.com/crisiscleanup" target="_blank">{{ $t('largeFooter.help_ccu') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'LargeFooter',
    data() {
      return {
        largeFooter: {
          ready_to_deploy_msg: this.$t('largeFooter.ready_to_deploy_msg'),
          ccu_deployments: this.$t('largeFooter.ccu_deployments'),
          dozens_disasters_msg: this.$t('largeFooter.dozens_disasters_msg'),
          all_deployments_msg: this.$t('largeFooter.all_deployments_msg'),
          media_coverage: this.$t('largeFooter.media_coverage'),
          no_spotlight_msg: this.$t('largeFooter.no_spotlight_msg'),
          in_the_news_msg: this.$t('largeFooter.in_the_news_msg'),
          want_to_help: this.$t('largeFooter.want_to_help'),
          help_ccu: this.$t('largeFooter.help_ccu'),
          ccu_open_source: this.$t('largeFooter.ccu_open_source'),
          ccu_volunteer_dev: this.$t('largeFooter.ccu_volunteer_dev')
        }
      }
    }
  }
</script>

<template>
  <footer>
    <div class="container-fluid">
      <div class="row" id="footer-row">
        <div class="col-md-3 footer-logo">
          <a href="/"><img src="/static/img/ccu-logo-white.png" class="img-fluid"></a>
          <h5>{{ $t('largeFooter.ready_to_deploy_msg') }}</h5>
          <p>Crisis Cleanup is an <a href="https://github.com/CrisisCleanup/crisiscleanup">open source project</a></p>
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
          <h4>{{ $t('largeFooter.ccu_deployments') }}</h4>
          <p>{{ $t('largeFooter.dozens_disasters_msg') }}</p>
          <a href="http://blog.crisiscleanup.org/2013/11/all-crisis-cleanup-incidents.html">{{ $t('largeFooter.all_deployments_msg') }}</a>
        </div>
        <div class="col-md-3">
          <i class="fa fa-video-camera "></i>
          <h4>{{ $t('largeFooter.media_coverage') }}</h4>
          <p>{{ $t('largeFooter.no_spotlight_msg') }}</p>
          <a href="http://blog.crisiscleanup.org/2013/07/crisis-cleanup-media-coverage.html">{{ $t('largeFooter.in_the_news_msg') }}</a>
        </div>
        <div class="col-md-3">
          <i class="fa fa-heart"></i>
          <h4>{{ $t('largeFooter.want_to_help') }}</h4>
          <p>Crisis Cleanup is open source and powered mostly by dedicated volunteers. Support Crisis Cleanup with a
            <a href="http://bit.ly/CCUPatreon" target="_blank">monthly pledge</a>. If you are a Ruby / PostgreSQL
            programmer, check out the Crisis Cleanup
            <a href="https://github.com/CrisisCleanup/crisiscleanup">Github repository</a> and contact us.</p>
          <a href="https://www.patreon.com/crisiscleanup" target="_blank">{{ $t('largeFooter.help_ccu') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}
</script>

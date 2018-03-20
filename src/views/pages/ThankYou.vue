<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">{{ $t('thankYou.thank_you_donation') }}</h1>
            <h4 class="pt-3">{{ $t('thankYou.impact_statement') }}</h4>
            <h4 class="pt-3">{{ $t('thankYou.impact_statement_2') }}</h4>
            <p class="text-muted">{{ $t('thankYou.return_to_map') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThankYou'
}
</script>

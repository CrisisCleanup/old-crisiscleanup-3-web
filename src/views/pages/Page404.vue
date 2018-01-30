<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">{{ $t('four0Four.oops_lost') }}</h4>
            <p class="text-muted">{{ $t('four0Four.page_not_found') }}</p>
            <router-link to="map"><a class="btn btn-primary"><span style="color: white;">{{ $t('four0Four.go_home') }}</span></a> </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

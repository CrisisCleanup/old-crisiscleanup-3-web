<template>
  <div>
    <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
      <small><b>Today</b></small>
    </Callout>
    <hr class="transparent mx-3 my-0">
    <Callout variant="warning" class="m-0 py-3">
      <div class="avatar float-right">
        <img src="/static/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
      </div>
      <div>Meeting with <strong>Lucas</strong></div>
      <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
      <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA </small>
    </Callout>
    <hr class="mx-3 my-0">
    <Callout variant="info" class="m-0 py-3">
      <div class="avatar float-right">
        <img src="/static/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
      </div>
      <div>Skype with <strong>Megan</strong></div>
      <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 4 - 5pm</small>
      <small class="text-muted"><i class="icon-social-skype"></i>&nbsp; On-line </small>
    </Callout>
    <hr class="transparent mx-3 my-0">
    <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
      <small><b>Tomorrow</b></small>
    </Callout>
    <hr class="transparent mx-3 my-0">
    <Callout variant="danger" class="m-0 py-3">
      <div>New UI Project - <strong>deadline</strong></div>
      <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 10 - 11pm</small>
      <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ </small>
      <div class="avatars-stack mt-2">
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/2.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
      </div>
    </Callout>
    <hr class="mx-3 my-0">
    <Callout variant="success" class="m-0 py-3">
      <div><strong>#10 Startups.Garden</strong> Meetup</div>
      <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
      <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA </small>
    </Callout>
    <hr class="mx-3 my-0">
    <Callout variant="primary" class="m-0 py-3">
      <div><strong>Team meeting</strong></div>
      <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 4 - 6pm</small>
      <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ </small>
      <div class="avatars-stack mt-2">
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/2.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
        <div class="avatar avatar-xs">
          <img src="/static/img/avatars/8.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </div>
      </div>
    </Callout>
    <hr class="mx-3 my-0">
  </div>
</template>

<script>
  import Callout from '../Callout'
  import cSwitch from '../Switch'

  export default {
    components: {
      Callout,
      cSwitch
    }
  }
</script>

<template>
  <div class="p-3">
    <h6>Settings</h6>
    <div class="aside-options">
      <div class="clearfix mt-4">
        <small><b>Option 1</b></small>
        <c-switch type="text" variant="success" on="on" off="off" :pill="true" size="sm" class="float-right"
                  :checked="true"/>
      </div>
      <div>
        <small class="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </small>
      </div>
    </div>
    <div class="aside-options">
      <div class="clearfix mt-3">
        <small><b>Option 2</b></small>
        <c-switch type="text" variant="success" on="on" off="off" :pill="true" size="sm" class="float-right"/>
      </div>
      <div>
        <small class="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </small>
      </div>
    </div>
    <div class="aside-options">
      <div class="clearfix mt-3">
        <small><b>Option 3</b></small>
        <c-switch type="text" variant="success" on="on" off="off" :pill="true" size="sm" class="float-right"/>
      </div>
    </div>
    <div class="aside-options">
      <div class="clearfix mt-3">
        <small><b>Option 4</b></small>
        <c-switch type="text" variant="success" on="on" off="off" :pill="true" size="sm" class="float-right"
                  :checked="true"/>
      </div>
    </div>
    <hr>
    <h6>System Utilization</h6>
    <div class="text-uppercase mb-1 mt-4">
      <small><b>CPU Usage</b></small>
    </div>
    <b-progress class="progress-xs" variant="info" :value="25"></b-progress>
    <small class="text-muted">348 Processes. 1/4 Cores.</small>
    <div class="text-uppercase mb-1 mt-2">
      <small><b>Memory Usage</b></small>
    </div>
    <b-progress class="progress-xs" variant="warning" :value="70"></b-progress>
    <small class="text-muted">11444GB/16384MB</small>
    <div class="text-uppercase mb-1 mt-2">
      <small><b>SSD 1 Usage</b></small>
    </div>
    <b-progress class="progress-xs" variant="danger" :value="95"></b-progress>
    <small class="text-muted">243GB/256GB</small>
    <div class="text-uppercase mb-1 mt-2">
      <small><b>SSD 2 Usage</b></small>
    </div>
    <b-progress class="progress-xs" variant="success" :value="10"></b-progress>
    <small class="text-muted">25GB/256GB</small>
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

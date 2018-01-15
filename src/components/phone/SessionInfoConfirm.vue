<template>
<div class="row justify-content-center">
  <div class="col-6">
    <div class="card text-white bg-dark">
      <div class="card-body">
        <h4 class="card-title">Welcome back {{ userName.first }}!</h4>

        <div class="form-group">
          <label>Please confirm the number you would like to use today. Don't worry, we will hide it on all inbound and outbound calls for your protection.
            <input class="form-control" v-model.trim="phone" placeholder="601-554-5873">
          </label>
        </div>

        <div class="form-group">
          <label>Choose a gateway
            <input class="form-control" v-model.trim="gateway" placeholder="Hurricane Irma">
          </label>
        </div>

        <div class="form-group">
          <label>Also confirm the states you will make calls to
            <input class="form-control" v-model.trim="states" placeholder="All States">
          </label>
        </div>

        <button class="btn" @click="updateSessionInfo">Accept</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'phone-session-info-confirm',
    props: [
      'userName',
      'lastUsedPhone',
      'lastUsedGateway',
      'lastUsedStates'
    ],
    data() {
      return {
        phone: this.lastUsedPhone,
        gateway: this.lastUsedGateway,
        states: this.lastUsedStates
      };
    },
    methods: {
      updateSessionInfo() {
        this.$emit('confirm', {
          phone: this.phone,
          gateway: this.gateway,
          states: this.states
        });
      }
    }
  }
</script>

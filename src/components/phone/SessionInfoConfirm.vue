<template>
<div class="row justify-content-center">
  <div class="col-6">
    <div class="card text-white bg-dark">
      <div class="card-body">
        <h4 class="card-title">Welcome back {{ user.first_name }}!</h4>

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
    ],
    mounted: function () {
      this.user = this.$store.state.phone.user;
    },
    data() {
      return {
        user: {},
        phone: null,
        gateway: null,
        states: null
      };
    },
    methods: {
      save(){
        //Update the user's information
        //TODO: add gateway, turn states into an array or make singular
        var userData = {
          phone: this.phone === null ? this.user.last_used_phone_number : this.phone,
          state: this.states === null ? this.user.last_used_state : this.states
        }
        this.$http.put(`${process.env.API_PHONE_ENDPOINT}/users/` + this.$store.state.phone.user.id + `/update_detail`, userData).then(r => {
        }).catch(err => {
          console.log(err);
        });
      },
      updateSessionInfo() {
        this.$emit('confirm', {
          phone: this.phone,
          gateway: this.gateway,
          states: this.states
        });
        this.save();
      }
    }
  }
</script>

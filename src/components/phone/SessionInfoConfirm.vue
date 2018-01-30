<template>
<div class="row justify-content-center">
  <div class="col-6">
    <b-form @submit="updateSessionInfo">
      <div class="card text-white bg-dark">
        <div class="card-body">
          <h4 class="card-title">Welcome back {{ user.name }}!</h4>

          <b-form-group
            id="updatedPhone"
            label="Please confirm the number you would like to use today. Don't worry, we will hide it on all inbound and outbound calls for your protection."
            label-for="updatedPhone">
            <b-form-input type="tel" v-model.trim="updatedPhone" v-bind:placeholder="user.last_used_phone_number"> </b-form-input>
          </b-form-group>

          <b-form-group
            id="updatedGatewayId"
            label="Choose a gateway"
            label-for="updatedGatewayId">
            <b-form-select v-model.trim="updatedGateway" :options="gatewayOptions"></b-form-select>
          </b-form-group>

          <b-form-group
            id="updatedStates"
            label="Also confirm the states you will make calls to"
            label-for="updatedStates">
            <b-form-input v-model.trim="updatedStates" v-bind:placeholder="user.last_used_state"></b-form-input>
          </b-form-group>

      <b-button type="submit" variant="light">Submit</b-button>

        </div>
      </div>

    </b-form>
  </div>
</div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  export default {
    name: 'phone-session-info-confirm',
    data() {
      return {
        updatedGateway: null,
        updatedPhone: null,
        updatedStates: null,
        gatewayOptions: []
      };
    },
    created: function() {
      this.getGatewayOptions();
    },
    computed: {
      ...mapGetters('phone', {
        user: 'getUser',
        gateway: 'getGateway',
      }),
      ...mapGetters('auth', {
        userId: 'getUserId'
      })
    },
    methods: {
      getGatewayOptions() {
        Vue.axios.get(`${process.env.API_PHONE_ENDPOINT}/gateways`).then(resp => {
            this.gatewayOptions = resp.data.results.map(function(gateway) {
              return {text: gateway.name, value: gateway.id};
            })
        })
      },
      async updateSessionInfo(evt){
        evt.preventDefault();
        //Update the user's information
        //TODO: add functionality to turn states into an array or make singular 'confirm the state'
        var userData = {
          id: this.userId,
          last_used_phone_number: this.updatedPhone === null ? this.user.last_used_phone_number : this.updatedPhone,
          last_used_state: this.updatedStates === null ? this.user.last_used_state : this.updatedStates
        }

        //update Gateway if necessary
        if (this.updatedGateway != null) {
          await this.$store.dispatch('phone/getGatewayDetails', this.updatedGateway).then(resp => {
            userData.gateway = this.$store.state.phone.gateway.id;
          })
        }

        //after updating gateway - update user
        if (userData.id != null) {
          this.$store.dispatch('phone/updateUser', userData).then(() => {
            this.$emit('confirm', {changedGateway: this.updatedGateway != null});
          }).catch(err => {
            console.log(err);
          }); 
        }
      }
    }
  }
</script>

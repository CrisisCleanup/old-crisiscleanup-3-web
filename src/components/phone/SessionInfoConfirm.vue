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
            id="updatedEvent"
            label="Choose a gateway"
            label-for="updatedEvent">
            <b-form-select v-model.trim="updatedEvent" :options="eventOptions"></b-form-select>
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
        updatedEvent: null,
        updatedPhone: null,
        updatedStates: null,
        eventOptions: []
      };
    },
    mounted: function() {
      this.getEventOptions();
    },
    computed: {
      ...mapGetters('phone', {
        user: 'getUser',
      }),
      ...mapGetters(['getParticipatingEvents', 'getCurrentEvent'])
    },
    methods: {
      getEventOptions() {
        this.eventOptions = this.getParticipatingEvents.map(function(event) {
          return {text: event.name, value:event.event_id}
        });
      },
      updateSessionInfo(evt){
        evt.preventDefault();
        //Update the user's information
        //TODO: add functionality to turn states into an array or make singular 'confirm the state'
        var userData = {
          id: this.$store.getters['auth/getUserId'],
          last_used_phone_number: this.updatedPhone === null ? this.user.last_used_phone_number : this.updatedPhone,
          last_used_state: this.updatedStates === null ? this.user.last_used_state : this.updatedStates
        }
        if (userData.id != null) {
          this.$store.dispatch('phone/updateUser', userData).then(() => {
            this.$emit('confirm', userData);
          }).catch(err => {
            console.log(err);
          }); 
        }

        //update Event if necessary
        if (this.updatedEvent != null) {
          this.$store.dispatch('changeEventContext', this.updatedEvent).catch(err => {
            console.log(err);
          })
        }

        //after updating event - update user

      }
    }
  }
</script>

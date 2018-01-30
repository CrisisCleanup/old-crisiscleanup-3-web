<template>
  <div>
    <b-form @submit="onSubmit">
    <!-- ******************** Profile ********************* -->
    <div class="card">
      <div class="card-header text-center">Profile</div>
      <div class="card-body" >
        <p class="card-text">
          <b-form-group
            id="name"
            label="Name"
            label-for="name">
            <b-form-input v-model.trim="userProfile.name" required></b-form-input>
          </b-form-group>
          <b-form-group
            id="phoneNumber"
            label="Mobile Phone #"
            label-for="phoneNumber">
            <b-form-input type="tel" v-model.trim="userProfile.phoneNumber"></b-form-input>
          </b-form-group>
          <b-form-group
            id="email"
            label="Email"
            label-for="email">
            <b-form-input type="email" v-model.trim="userProfile.email"></b-form-input>
          </b-form-group>
          <b-form-group
            id="organizationOptions"
            label="My Organization"
            label-for="organizationOptions">
          <b-form-select v-model="userProfile.myOrganization" :options="organizationOptions" class="mb-3"></b-form-select>
          </b-form-group>
          <b-form-group
            id="isContactForOrganization"
            label-for="isContactForOrganization">
            <b-form-checkbox v-model="userProfile.isContactForOrganization" plain>
                List me as a contact for my organization
            </b-form-checkbox>
          </b-form-group> 
        </p>
      </div>
    </div>
    <!-- ******************** Call Center Options ********************* -->
    <div class="card">
      <div class="card-header text-center">Call Center Options</div>
      <div class="card-body" >
        <p class="card-text">
          <b-form-group
            id="willingToReceiveCalls"
            description="I am willing to take calls for my organization's associated disasters."
            label-for="willingToReceiveCalls">
            <b-form-checkbox v-model="callCenterOptions.willingToReceiveCalls" plain>
                I would like to work the Virtual Call Center
            </b-form-checkbox> 
          </b-form-group>
          <b-form-group
            id="willingToBeCallHero"
            description="If you have experieince with the Call Center and are comfortable enough with how it works, you can become a resource that others can come to when they need help with the Call Center process."
            label-for="willingToBeCallHero">
            <b-form-checkbox v-model="callCenterOptions.willingToBeCallSupport" plain>
                I'm willing to be Call Center Support
            </b-form-checkbox>
          </b-form-group>
          <!-- Advanced call center options, only visible if they are willing to accept calls --> 
          <div v-if="callCenterOptions.willingToReceiveCalls">
          <b-form-group
            id="willingToBeCallHero"
            description="I like this kind of work and am willing to take calls for future disasters outside of my organization."
            label-for="willingToBeCallHero">
            <b-form-checkbox v-model="callCenterOptions.willingToBeCallHero" plain>
                I'm willing to be a Call Center Hero
            </b-form-checkbox>
          </b-form-group>
          <b-form-group
            id="callLanguages"
            label="I'm willing to support calls in the following languages in addition to English:"
            label-for="callLanguages">
            <b-form-checkbox-group stacked v-model="callCenterOptions.callLanguages" :options="languageOptions" plain>
            </b-form-checkbox-group>
          </b-form-group>
          </div>
        </p>
      </div>
    </div>
    <!-- ******************** Super Mapper Options ********************* -->
    <div class="card">
      <div class="card-header text-center">Super Mapper Options</div>
      <div class="card-body" >
        <p class="card-text">
          <b-form-group
            id="callLanguages"
            description="If you have mad skills when it comes to convincing stubborn map pins from going to their proper place on the mpa, then we have a job for you. If call takers struggle with a wonky map, they will flag it for help and you will be notified to come work your magin and get to the right place. A map pin in the wrong place means a family may not get the help they need."
            label-for="callLanguages">
            <b-form-checkbox v-model="mapOptions.willingToBePinHero" plain>
                I'm willing to fix problem map pins
            </b-form-checkbox>
          </b-form-group> 
        </p>
      </div>
    </div>
      <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default {
    data() {
        return {
          callUserExists: false,
          userProfile: {
            name: null,
            email: null,
            phoneNumber: null,
            myOrganization: null,
            isContactForOrganization: false,
            isAdmin: false
          },
          callCenterOptions: {
            callCenterNumber: null,
            willingToReceiveCalls: false,
            willingToBeCallSupport: false,
            willingToBeCallHero: false,
            callLanguages: []
          },
          mapOptions: {
            willingToBePinHero: false,
          },
          languageOptions: ["Spanish","Mandarin"],
          organizationOptions: []  
      }
    },
    created: function() {
      this.populateInitialForm();
    },
    methods: {
      populateInitialForm(){
        //Get the user's caller information
        this.$store.dispatch('phone/getUser', {userId: this.$store.getters['auth/getUserId'], overwrite: false}).then(() => {
          if(this.$store.state.phone.user != null){
            var user = this.$store.state.phone.user;
            this.callUserExists = true
            this.callCenterOptions.callCenterNumber = user.last_used_phone_number;
            this.callCenterOptions.willingToReceiveCalls = user.willing_to_receive_calls;
            this.callCenterOptions.willingToBeCallSupport = user.willing_to_be_call_center_support;
            this.callCenterOptions.willingToBeCallHero = user.willing_to_be_call_hero;
            if(user.supported_languages != null){
              this.callCenterOptions.callLanguages = user.supported_languages.split(',');
            }
            this.mapOptions.willingToBePinHero = user.willing_to_be_pin_hero;
          }
        }).catch(err => {
          this.callUserExists = false;
        });
        //Set the current user details 
        this.userProfile.myOrganization = this.$store.state.worker.currentOrgId;
        this.userProfile.name = this.$store.state.auth.profile.name;
        this.userProfile.email = this.$store.state.auth.profile.email;
        this.userProfile.phoneNumber = this.$store.state.auth.profile.person.mobile;
        Vue.axios.get(`/organizations?is_active=true&ordering=-created_at&limit=500`).then(resp => {
          this.organizationOptions = resp.data.results.map(function(organization) {
            return {text: organization.name, value: organization.uid};
          })
        });
      },
      onSubmit (evt) {
        evt.preventDefault();
        //TODO: Save non-call center data

        //Save call center information
        var userData = {
          id: this.$store.getters['auth/getUserId'],
          name: this.userProfile.name,
          willing_to_receive_calls: this.callCenterOptions.willingToReceiveCalls,
          willing_to_be_call_center_support: this.callCenterOptions.willingToBeCallSupport,
          willing_to_be_call_hero: this.callCenterOptions.willingToBeCallHero && this.callCenterOptions.willingToReceiveCalls, //They can't be a call hero and not receive calls
          supported_languages: this.callCenterOptions.callLanguages.join(','),
          willing_to_be_pin_hero: this.mapOptions.willingToBePinHero,
          last_used_phone_number: this.callCenterOptions.callCenterNumber || this.userProfile.phoneNumber
        };
        if(userData.supported_languages == ""){
          userData.supported_languages = null;
        }
        if(this.callUserExists) {
          Vue.axios.patch(`${process.env.API_PHONE_ENDPOINT}/users/` + userData.id, userData).then(resp => {
            this.$store.commit('phone/setUser', resp.data)
            this.$router.push({path: '/worker/dashboard'});
          })
        } else {
          //Only create a new one if they checked call center / mapper options
          if(userData.willing_to_receive_calls || userData.willing_to_be_call_center_support || userData.willing_to_be_pin_hero) {
            Vue.axios.post(`${process.env.API_PHONE_ENDPOINT}/users`, userData).then(resp => {
              this.$store.commit('phone/setUser', resp.data)
              this.$router.push({path: '/worker/dashboard'});
            })
          } else {
            this.$router.push({path: '/worker/dashboard'});
          }
        }
      },
    }
  }
</script>
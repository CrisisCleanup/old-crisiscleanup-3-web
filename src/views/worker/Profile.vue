<template>
  <div>
    <b-form @submit="onSubmit">
    
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
            label-for="phoneNumber"
            >
            <b-form-input type="tel" v-model.trim="userProfile.phoneNumber" :formatter="formatPhoneNumber"></b-form-input>
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
          <b-form-select v-model="userProfile.myOrganization" :options="organizationOptions" class="mb-3" required></b-form-select>
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

    <div class="card">
      <div class="card-header text-center">Call Center Options</div>
      <div class="card-body" >
        <p class="card-text">
          <b-form-group
            id="willingToReceiveCalls"
            label-for="willingToReceiveCalls">
            <b-form-checkbox v-model="callCenterOptions.willingToReceiveCalls" plain>
                I would like to work the Virtual Call Center
            </b-form-checkbox> 
          </b-form-group>
          <b-form-group
            id="willingToBeCallHero"
            description="If you have experieince with the Call Center and are comfortable enough with how it works, you can become a resource that others can come to when they need help with the Call Center process."
            label-for="willingToBeCallHero">
            <b-form-checkbox v-model="callCenterOptions.willingToBeCallHero" plain>
                I'm willing to be Call Center Support
            </b-form-checkbox>
          </b-form-group>
          <b-form-group
            id="willingToBeCallHero"
            description="I like this kind of work and am willing to take calls for future disasters."
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
        </p>
      </div>
    </div>

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

  export default {
    data() {
        return {
          userProfile: {
            name: null,
            email: null,
            phoneNumber: null,
            myOrganization: null,
            isContactForOrganization: false,
            isAdmin: false
          },
          callCenterOptions: {
            willingToReceiveCalls: false,
            willingToBeCallHero: false,
            callLanguages: []
          },
          mapOptions: {
            willingToBePinHero: false,
          },
          languageOptions: [
            {text: 'Spanish', value: 'spanish'},
            {text: 'Mandarin', value: 'mandarin'}
          ],
          organizationOptions: [
            {text: 'Org1', value: 'org1'},
            {text: 'Org2', value: 'org2'}
          ]  
      }
    },
    methods: {
      formatPhoneNumber(value, event) {
        return value.replace(/[^0-9]/g, '')
                .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      },
      onSubmit (evt) {
        evt.preventDefault();
        console.log("submit")
      },
    }
  }
</script>
<template>
  <div class="animated fadeIn">
    <div class="container">
      <b-form @submit="updateProfile" id="profile-form">
        <div class="row">
          <div class="col-md-12">
            <h1>Profile</h1>
            <div v-show="hasErrors" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>
          </div>

          <div class="col-sm-12 col-md-3" />

          <div class="col-sm-12 col-md-6 mb-4">
            <div class="col-sm-12 user-profile-photo"
              id="profile_photo"
              v-if="profile_photo_url"
              :style="`background-image: url(${profile_photo_url})`">
            </div>
            <div class="col-sm-12">
              <b-form-file placeholder="Choose a file..." accept="image/*" @change="imageChanged($event)"></b-form-file>
            </div>
          </div>

          <div class="col-sm-12 col-md-3" />

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="icon-user"></i></span>
              <b-form-input type="text" class="form-control"
                v-bind:placeholder = "$t('profile.first_name_placeholder')"
                v-model="userInfo.first_name"
                :state="!$v.userInfo.first_name.$invalid">
              </b-form-input>
              <b-form-invalid-feedback>
                {{ errors.first_name }}
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="icon-user"></i></span>
              <b-form-input type="text" class="form-control"
                v-bind:placeholder = "$t('profile.last_name_placeholder')"
                v-model="userInfo.last_name"
                :state="!$v.userInfo.last_name.$invalid">
              </b-form-input>
              <b-form-invalid-feedback>
                {{ errors.last_name }}
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-addon -mobile"><i class="fa fa-mobile"></i></span>
              <b-form-input type="tel" class="form-control"
                v-bind:placeholder = "$t('profile.mobile_placeholder')"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                v-model="userInfo.mobile_phone"
                :state="!$v.userInfo.mobile_phone.$invalid">
              </b-form-input>
              <b-form-invalid-feedback>
                {{ errors.mobile_phone }}
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="col-sm-12 col-md-6" />

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <b-form-select
                :options="roles"
                :text-field="'name'"
                :value-field="'key'"
                v-model="userInfo.role">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- {{$t('profile.role_placeholder')}} --</option>
                </template>
              </b-form-select>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <b-form-select
                :options="languages"
                :text-field="'label'"
                :value-field="'subtag'"
                v-model="userInfo.preferred_language">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- {{$t('profile.preferred_language_placeholder')}} --</option>
                </template>
              </b-form-select>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <b-form-select
                multiple
                class="multiple-select"
                :select-size="5" 
                :options="assets"
                :text-field="'label'"
                :value-field="'name_t'"
                v-model="userInfo.assets">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- {{$t('profile.assets_placeholder')}} --</option>
                </template>
              </b-form-select>
            </div>
          </div>

          <div class="col-sm-12 col-md-6" />

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="icon-envelope"></i></span>
              <b-form-input type="email" class="form-control"
                v-bind:placeholder = "$t('profile.email_placeholder')"
                v-model="userInfo.email" disabled>
              </b-form-input>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <button @click="updateEmail()" type="button" class="btn btn-block btn-danger">{{ $t('profile.update_email') }}</button>
            </div>
          </div>

          <!-- <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="icon-lock"></i></span>
              <b-form-input type="password" class="form-control"
                v-bind:placeholder = "$t('profile.pw_placeholder')"
                :state="profileFormErrors.contact.hasOwnProperty('email') ? false : null"
                v-model="userInfo.password" required
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors.password }}
              </b-form-invalid-feedback>
            </div>
          </div> -->

          <div class="col-sm-12 col-md-3" />

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <button type="submit" class="btn btn-block btn-success">{{ $t('profile.save') }}</button>
            </div>
          </div>
        </div>
      </b-form>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-4">
            <button @click="moveOrganization()" type="button" class="btn btn-block btn-success">{{ $t('profile.move_organizations') }}</button>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-4">
            <button @click="inviteOthersTo()" type="button" class="btn btn-block btn-danger">{{ $t('profile.invite_others_to') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import { validationMixin } from "vuelidate"
import { required, minLength } from "vuelidate/lib/validators"

import UserRoles from '../../definitions/userroles/userRoles.json';

export default {
  name: 'Profile',
  data() {
    return {
      userInfo: {
        first_name: '',
        last_name: '',
        role: 'worker',
        assets: [],
        email: 'test@gmail.com',
        mobile_phone: '',
        preferred_language: 'en',
      },
      photoFile: null,
      profile_photo_url: 'https://pbs.twimg.com/profile_images/3736281349/77fcd504fa680b45f0469fc1587300d7_400x400.jpeg',
      roles: [],
      assets: [],
      languages: [],
      hasErrors: false,
      errorMessage: '',
      errors : {
        first_name: this.$t('profile.first_name_error'),
        last_name: this.$t('profile.last_name_error'),
        role: this.$t('profile.role_error'),
        mobile_phone: this.$t('profile.mobile_phone_error')
      },
    }
  },
  mixins: [
    validationMixin
  ],
  validations: {
    userInfo: {
      first_name: {
        required
      },
      last_name: {
        required
      },
      mobile_phone: {
        required
      }
    }
  },
  mounted() {
    const defaultsRole = UserRoles['defaults'];
    for (const key in UserRoles) {
      const role = UserRoles[key];
      if (key !== 'defaults') {
        this.roles.push({
          ...defaultsRole,
          ...role,
          name: this.$t(role.name_t),
          key: key
        });        
      }
    }
    const LANGUAGES = [
      {
        subtag: 'en',
        name_t: 'languages.en',
        is_default: true,
        list_order: 10
      },
      {
        subtag: 'en-US',
        name_t: 'languages.en-us',
        is_default: false,
        list_order: 20
      },
      {
        subtag: 'en-AU',
        name_t: 'languages.en-au',
        is_default: false,
        list_order: 30
      },
      {
        subtag: 'en-CA',
        name_t: 'languages.en-ca',
        is_default: false,
        list_order: 40
      },
      {
        subtag: 'es',
        name_t: 'languages.es',
        is_default: false,
        list_order: 50
      },
      {
        subtag: 'es-MX',
        name_t: 'languages.es-mx',
        is_default: false,
        list_order: 60
      },
    ];

    let languages = []
    for (const index in LANGUAGES) {
      const language = LANGUAGES[index];
      languages.push({
        ...language,
        label: this.$t(language.name_t)
      });
    }
    this.languages = languages;

    const ASSETS = [
      {
        name_t: 'assets.chainsaw',
        list_order: 10
      },
      {
        name_t: 'assets.van',
        list_order: 20
      },
      {
        name_t: 'assets.bus',
        list_order: 30
      },
      {
        name_t: 'assets.pump',
        list_order: 40
      },
      {
        name_t: 'assets.compressor',
        list_order: 50
      },
      {
        name_t: 'assets.trailer',
        list_order: 60
      },
      {
        name_t: 'assets.backhoe',
        list_order: 70
      },
      {
        name_t: 'assets.skid_steer',
        list_order: 80
      },
      {
        name_t: 'assets.bulldozer',
        list_order: 90
      },
      {
        name_t: 'assets.excavator',
        list_order: 100
      },
      {
        name_t: 'assets.dump_truck',
        list_order: 110
      },
      {
        name_t: 'assets.forklift',
        list_order: 120
      }
    ];
    let assets = []
    for (const index in ASSETS) {
      const asset = ASSETS[index];
      assets.push({
        ...asset,
        label: this.$t(asset.name_t)
      });
    }
    this.assets = assets;

  },
  methods: {
    imageChanged(evt) {
      this.photoFile = evt.target.files[0];
      var reader = new FileReader()
      reader.addEventListener('load', (event)=> {
        this.profile_photo_url = event.target.result;
      }, false);
      reader.readAsDataURL(this.photoFile);
      this.$forceUpdate();
    },
    updateProfile(evt) {
      evt.preventDefault();
      console.log(evt);
    },
    updateEmail() {
    },
    moveOrganization() {
    },
    inviteOthersTo() {
    }
  }
}
</script>
<style scoped>
  /*.input-group {*/
    /*padding-bottom: 1em;*/
  /*}*/

  .input-group .invalid-feedback {
    position: absolute;
    left: 0;
    top: 30px;
  }
  .input-group-addon.-mobile {
    padding: 0 13px;
  }
  .fa.fa-mobile {
    font-size: 24px;
  }
  .multiple-select {
    height: 100px;
  }
  .user-profile-photo {
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

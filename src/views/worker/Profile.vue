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
              <b-form-select
                :options="roles"
                :text-field="'name'"
                :value-field="'key'"
                v-model="userInfo.role"
                :state="!$v.userInfo.role.$invalid">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- {{$t('profile.role_placeholder')}} --</option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback>
                {{ errors.role }}
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <b-form-select
                :options="assets"
                :text-field="'name'"
                :value-field="'name'"
                v-model="userInfo.assets"
                :state="!$v.userInfo.assets.$invalid">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- {{$t('profile.assets_placeholder')}} --</option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback>
                {{ errors.assets }}
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="icon-envelope"></i></span>
              <b-form-input type="email" class="form-control"
                v-bind:placeholder = "$t('profile.email_placeholder')"
                v-model="userInfo.email"
                :state="!$v.userInfo.email.$invalid">
              </b-form-input>
              <b-form-invalid-feedback>
                {{ errors.email }}
              </b-form-invalid-feedback>
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

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="icon-phone"></i></span>
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

          <div class="col-sm-12 col-md-6">
            <div class="input-group mb-4">
              <b-form-select
                :options="languages"
                :text-field="'label'"
                :value-field="'code'"
                v-model="userInfo.preferred_language">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- {{$t('profile.preferred_language_placeholder')}} --</option>
                </template>
              </b-form-select>
            </div>
          </div>

          <div class="col-sm-12 col-md-6" />
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
            <button @click="inviteOthersTo()" type="button" class="btn btn-block btn-success">{{ $t('profile.invite_others_to') }}</button>
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

import UserRoles from '../../definitions/userroles/roles.json';

export default {
  name: 'Profile',
  data() {
    return {
      userInfo: {
        first_name: '',
        last_name: '',
        role: null,
        assets: null,
        email: '',
        mobile_phone: '',
        preferred_language: 'en',
      },
      roles: [],
      assets: [],
      languages: ['en', 'es'],
      hasErrors: false,
      errorMessage: '',
      errors : {
        first_name: this.$t('profile.first_name_error'),
        last_name: this.$t('profile.last_name_error'),
        role: this.$t('profile.role_error'),
        assets: this.$t('profile.assets_error'),
        email: this.$t('profile.email_error'),
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
      role: {
        required
      },
      assets: {
        required
      },
      email: {
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
    let languages = []
    for (const index in this.languages) {
      const language = this.languages[index];
      languages.push({
        code: language,
        label: this.$t(`languages.${language}`)
      });
    }
    this.languages = languages;
  },
  methods: {
    updateProfile(evt) {
      evt.preventDefault();
      console.log(evt);
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
</style>

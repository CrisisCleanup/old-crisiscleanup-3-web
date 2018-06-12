<template>
  <div class="app">
    <div class="app-body">
      <div class="container-fluid">

        <!--<b-form @submit="postOrganization">-->
        <div class="card mx-4">

          <div class="card-body p-4">

            <div class="row">
              <div class="col-md-12">
                <h1 class="myCssClass" v-html="registerOrg.register_org"></h1>
                <h3 v-html="registerOrg.survivor_register_msg"></h3>
              </div>
            </div>
            <br>

            <div class="row">
              <div class="col-md-12">
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h5 v-html="registerOrg.choose_a_disaster"></h5>

              </div>
              <div class="col-md-6">
                  <b-form-select
                    v-model="selectedEvent"
                    :options="getParticipatingEvents"
                    :text-field="'name'"
                    :value-field="'uid'"
                    required
                    :state="orgFormErrors.hasOwnProperty('participating_event_uid') ? false : null">
                  </b-form-select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h5 v-html="registerOrg.primary_contact"></h5>

              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <b-form-input type="text" class="form-control" v-bind:placeholder = "$t('registerOrg.first_name')" required
                                v-model="contact_firstname"
                                :state="orgFormErrors.contact.hasOwnProperty('firstname') ? false : null"
                  ></b-form-input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-envelope"></i></span>
                  <b-form-input type="text" class="form-control" v-bind:placeholder = "$t('registerOrg.email')" required
                                :state="orgFormErrors.contact.hasOwnProperty('email') ? false : null"
                                v-model="contact_email"></b-form-input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <b-form-input type="text" class="form-control" v-bind:placeholder = "$t('registerOrg.last_name')" required
                                :state="orgFormErrors.contact.hasOwnProperty('lastname') ? false : null"
                                v-model="contact_lastname"></b-form-input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-phone"></i></span>
                  <b-form-input type="tel" class="form-control" v-bind:placeholder = "$t('registerOrg.cell_phone_number')"
                                :state="orgFormErrors.contact.hasOwnProperty('phone') ? false : null"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required v-model="contact_phone"></b-form-input>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-12">
                <h5 v-html="registerOrg.org_info"></h5>
                <h6 v-html="registerOrg.use_local_org_name_msg"></h6>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-star"></i></span>
                  <b-form-input type="text" v-bind:placeholder = "$t('registerOrg.organization_name')" v-model="name"
                                v-bind:state="orgFormErrors.hasOwnProperty('name') ? false : null" required></b-form-input>
                  <!--<b-form-invalid-feedback>{{errorName}}</b-form-invalid-feedback>-->
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-link"></i></span>
                  <b-form-input type="url" class="form-control" v-bind:placeholder = "$t('registerOrg.website')"
                                :state="orgFormErrors.hasOwnProperty('url') ? false : null"
                                v-model="url"></b-form-input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-users"></i></span>
                  <b-form-input type="text" class="form-control" v-bind:placeholder = "$t('registerOrg.referral')" 
                                :state="orgFormErrors.hasOwnProperty('referral') ? false : null"
                                v-model="referral"></b-form-input>
                </div>

              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-social-facebook"></i></span>
                  <b-form-input type="text" class="form-control" v-bind:placeholder = "$t('registerOrg.facebook')"
                                :state="orgFormErrors.hasOwnProperty('facebook') ? false : null"
                                v-model="facebook"></b-form-input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-social-twitter"></i></span>
                  <b-form-input type="text" class="form-control" v-bind:placeholder = "$t('registerOrg.twitter')" 
                                :state="orgFormErrors.hasOwnProperty('twitter') ? false : null"
                                v-model="twitter"></b-form-input>
                </div>

              </div>

            </div>

            <div class="row">
              <div class="col-md-12">
                <h5 v-html="registerOrg.org_roles"></h5>

              </div>
              <div class="col-md-12">
                  <b-form-checkbox v-model="review_other_organizations">
                    <b>{{ $t('registerOrg.review_approve') }}</b> {{ $t('registerOrg.review_approve_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_damage_assessment">
                    <b>{{ $t('registerOrg.damage_assessment') }}</b> {{ $t('registerOrg.damage_assessment_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_cleanup">
                    <b>{{ $t('registerOrg.cleanup') }}</b> {{ $t('registerOrg.cleanup_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_follow_up">
                    <b>{{ $t('registerOrg.follow_up') }}</b> {{ $t('registerOrg.follow_up_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_minor_repairs">
                    <b>{{ $t('registerOrg.minor_repairs') }}</b> {{ $t('registerOrg.minor_repairs_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_rebuilding">
                    <b>{{ $t('registerOrg.rebuilding') }}</b> {{ $t('registerOrg.rebuilding_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_coordination">
                    <b>{{ $t('registerOrg.coordination') }}</b> {{ $t('registerOrg.coordination_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="government">
                    <b>{{ $t('registerOrg.government') }}</b> {{ $t('registerOrg.government_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_other_activity">
                    <b>{{ $t('registerOrg.other_activity') }}</b> {{ $t('registerOrg.other_activity_msg') }}
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="not_an_org">
                    <b>{{ $t('registerOrg.not_organization') }}</b> {{ $t('registerOrg.not_organization_msg') }}
                  </b-form-checkbox>
              </div>

            </div>
            <div class="row">
              <div class="col-md-8">
                <div class="input-group mb-4">
                  <input type="text" class="form-control" v-bind:placeholder = "$t('registerOrg.where_working')" v-model="where_are_you_working">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-form-checkbox v-model="publishable">
                  <b>{{ $t('registerOrg.publish_profile') }}</b>
                </b-form-checkbox>
                <br>
                <b-form-checkbox v-model="accepted_terms">
                  <b>{{ $t('registerOrg.tos_priv_1') }} <router-link to="terms">{{ $t('registerOrg.tos_priv_tos') }}</router-link> {{ $t('registerOrg.tos_priv_and') }} <router-link to="privacy">{{ $t('registerOrg.tos_priv_priv') }}</router-link>{{ $t('registerOrg.tos_priv_2') }}</b>
                </b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button @click="signUp" type="button" class="btn btn-block btn-success btn-lg">{{ $t('actions.sign_up') }}</button>
              </div>
            </div>
          </div>
        </div>

        <!--</b-form>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
  .myCssClass {
    color: blue;
  }
</style>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {

    name: 'RegisterOrganization',
    data() {
      return {
        registerOrg: {
          register_org: this.$t('registerOrg.register_org'),
          survivor_register_msg: this.$t('registerOrg.survivor_register_msg'),
          primary_contact: this.$t('registerOrg.primary_contact'),
          org_info: this.$t('registerOrg.org_info'),
          use_local_org_name_msg: this.$t('registerOrg.use_local_org_name_msg'),
          org_roles: this.$t('registerOrg.org_roles'),
          choose_a_disaster: this.$t('registerOrg.choose_a_disaster'),
          first_name: this.$t('registerOrg.first_name'),
          email: this.$t('registerOrg.email'),
          last_name: this.$t('registerOrg.last_name'),
          cell_phone_number: this.$t('registerOrg.cell_phone_number'),
          organization_name: this.$t('registerOrg.organization_name'),
          address: this.$t('registerOrg.address'),
          state: this.$t('registerOrg.state'),
          referral: this.$t('registerOrg.referral'),
          facebook: this.$t('registerOrg.facebook'),
          city: this.$t('registerOrg.city'),
          zip_code: this.$t('registerOrg.zip_code'),
          website: this.$t('registerOrg.website'),
          twitter: this.$t('registerOrg.twitter'),
          review_approve: this.$t('registerOrg.review_approve'),
          review_approve_msg: this.$t('registerOrg.review_approve_msg'),
          damage_assessment: this.$t('registerOrg.damage_assessment'),
          damage_assessment_msg: this.$t('registerOrg.damage_assessment_msg'),
          cleanup: this.$t('registerOrg.cleanup'),
          cleanup_msg: this.$t('registerOrg.cleanup_msg'),
          follow_up: this.$t('registerOrg.follow_up'),
          follow_up_msg: this.$t('registerOrg.follow_up_msg'),
          minor_repairs: this.$t('registerOrg.minor_repairs'),
          minor_repairs_msg: this.$t('registerOrg.minor_repairs_msg'),
          rebuilding: this.$t('registerOrg.rebuilding'),
          rebuilding_msg: this.$t('registerOrg.rebuilding_msg'),
          coordination: this.$t('registerOrg.coordination'),
          coordination_msg: this.$t('registerOrg.coordination_msg'),
          government: this.$t('registerOrg.government'),
          government_msg: this.$t('registerOrg.government_msg'),
          other_activity: this.$t('registerOrg.other_activity'),
          other_activity_msg: this.$t('registerOrg.other_activity_msg'),
          not_organization: this.$t('registerOrg.not_organization'),
          not_organization_msg: this.$t('registerOrg.not_organization_msg'),
          where_working: this.$t('registerOrg.where_working'),
          publish_profile: this.$t('registerOrg.publish_profile'),
          tos_priv_1: this.$t('registerOrg.tos_priv_1'),
          tos_priv_tos: this.$t('registerOrg.tos_priv_tos'),
          tos_priv_and: this.$t('registerOrg.tos_priv_and'),
          tos_priv_priv: this.$t('registerOrg.tos_priv_priv'),
          tos_priv_2: this.$t('registerOrg.tos_priv_2')
        }
      }
    },
    computed: {
      ...mapGetters(['getParticipatingEvents', 'getCurrentEvent']),
      orgFormErrors() {
        return this.$store.getters.getOrgFormErrors;
      },
      selectedEvent: {
        get() {
          return this.$store.state.publicModule.org.participating_event_uid;
        },
        set(value) {
          this.$store.commit('updateOrg', {participating_event_uid: value});
        }
      },
      contact_firstname: {
        get() {
          return this.$store.state.publicModule.org.contact.firstname;
        },
        set(value) {
          this.$store.commit('updateContact', {firstname: value});
        }
      },
      contact_email: {
        get() {
          return this.$store.state.publicModule.org.contact.email;
        },
        set(value) {
          this.$store.commit('updateContact', {email: value});
        }
      },
      contact_lastname: {
        get() {
          return this.$store.state.publicModule.org.contact.lastname;
        },
        set(value) {
          this.$store.commit('updateContact', {lastname: value});
        }
      },
      contact_phone: {
        get() {
          return this.$store.state.publicModule.org.contact.phone;
        },
        set(value) {
          this.$store.commit('updateContact', {phone: value});
        }
      },
      name: {
        get() {
          return this.$store.state.publicModule.org.name;
        },
        set(value) {
          this.$store.commit('updateOrg', {name: value});
        }
      },
      address: {
        get() {
          return this.$store.state.publicModule.org.address;
        },
        set(value) {
          this.$store.commit('updateOrg', {address: value});
        }
      },
      state: {
        get() {
          return this.$store.state.publicModule.org.state;
        },
        set(value) {
          this.$store.commit('updateOrg', {state: value});
        }
      },
      referral: {
        get() {
          return this.$store.state.publicModule.org.referral;
        },
        set(value) {
          this.$store.commit('updateOrg', {referral: value});
        }
      },
      facebook: {
        get() {
          return this.$store.state.publicModule.org.facebook;
        },
        set(value) {
          this.$store.commit('updateOrg', {facebook: value});
        }
      },
      email: {
        get() {
          return this.$store.state.publicModule.org.email;
        },
        set(value) {
          this.$store.commit('updateOrg', {email: value});
        }
      },
      city: {
        get() {
          return this.$store.state.publicModule.org.city;
        },
        set(value) {
          this.$store.commit('updateOrg', {city: value});
        }
      },
      zip_code: {
        get() {
          return this.$store.state.publicModule.org.zip_code;
        },
        set(value) {
          this.$store.commit('updateOrg', {zip_code: value});
        }
      },
      url: {
        get() {
          return this.$store.state.publicModule.org.url;
        },
        set(value) {
          this.$store.commit('updateOrg', {url: value});
        }
      },
      twitter: {
        get() {
          return this.$store.state.publicModule.org.twitter;
        },
        set(value) {
          this.$store.commit('updateOrg', {twitter: value});
        }
      },
      review_other_organizations: {
        get() {
          return this.$store.state.publicModule.org.review_other_organizations;
        },
        set(value) {
          this.$store.commit('updateOrg', {review_other_organizations: value});
        }
      },
      does_damage_assessment: {
        get() {
          return this.$store.state.publicModule.org.does_damage_assessment;
        },
        set(value) {
          this.$store.commit('updateOrg', {does_damage_assessment: value});
        }
      },
      does_cleanup: {
        get() {
          return this.$store.state.publicModule.org.does_cleanup;
        },
        set(value) {
          this.$store.commit('updateOrg', {does_cleanup: value});
        }
      },
      does_follow_up: {
        get() {
          return this.$store.state.publicModule.org.does_follow_up;
        },
        set(value) {
          this.$store.commit('updateOrg', {does_follow_up: value});
        }
      },
      does_minor_repairs: {
        get() {
          return this.$store.state.publicModule.org.does_minor_repairs;
        },
        set(value) {
          this.$store.commit('updateOrg', {does_minor_repairs: value});
        }
      },
      does_rebuilding: {
        get() {
          return this.$store.state.publicModule.org.does_rebuilding;
        },
        set(value) {
          this.$store.commit('updateOrg', {does_rebuilding: value});
        }
      },
      does_coordination: {
        get() {
          return this.$store.state.publicModule.org.does_coordination;
        },
        set(value) {
          this.$store.commit('updateOrg', {does_coordination: value});
        }
      },
      government: {
        get() {
          return this.$store.state.publicModule.org.government;
        },
        set(value) {
          this.$store.commit('updateOrg', {government: value});
        }
      },
      does_other_activity: {
        get() {
          return this.$store.state.publicModule.org.does_other_activity;
        },
        set(value) {
          this.$store.commit('updateOrg', {does_other_activity: value});
        }
      },
      not_an_org: {
        get() {
          return this.$store.state.publicModule.org.not_an_org;
        },
        set(value) {
          this.$store.commit('updateOrg', {not_an_org: value});
        }
      },
      where_are_you_working: {
        get() {
          return this.$store.state.publicModule.org.where_are_you_working;
        },
        set(value) {
          this.$store.commit('updateOrg', {where_are_you_working: value});
        }
      },
      publishable: {
        get() {
          return this.$store.state.publicModule.org.publishable;
        },
        set(value) {
          this.$store.commit('updateOrg', {publishable: value});
        }
      },
      accepted_terms: {
        get() {
          return this.$store.state.publicModule.org.accepted_terms;
        },
        set(value) {
          this.$store.commit('updateOrg', {accepted_terms: value});
        }
      }
    },
    mounted() {
      this.$store.dispatch('getParticipatingEvents');
    },
    methods: {
      ...mapActions(['postOrganization']),
      signUp() {
        this.validateForm();
        this.$store.dispatch('postOrganization').then((result) => {
          this.$notify({
            type: 'success',
            group: 'core',
            title: this.$t('notify.success'),
            text: this.$t('notify.org_saved'),
            width: 500,
            animation: 'Velocity',
            speed: 1000,
            duration: 3000
          });
        }, (error) => {
          this.$notify({
            type: 'error',
            group: 'core',
            title: this.$t('notify.wait'),
            text: this.$t('notify.please_review_errors'),
            width: 500,
            animation: 'Velocity',
            speed: 1000,
            duration: 3000
          });
        });
      },
      validateForm() {
        if (!isNaN(this.name)) {
          this.orgFormErrors.name = true;
        }
      }
    },
  }
</script>

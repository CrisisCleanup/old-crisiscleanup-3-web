<template>
  <div class="app">
    <div class="app-body">
      <div class="container-fluid">

        <!--<b-form @submit="postOrganization">-->
        <div class="card mx-4">

          <div class="card-body p-4">

            <div class="row">
              <div class="col-md-12">
                <h1>{{ $t('register_org.register_org') }}</h1>
                <h3>{{ $t('register_org.survivor_register_msg') }}</h3>
              </div>
            </div>
            <br>

            <div class="row">
              <div class="col-md-12">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <b-form-fieldset
                  label="Choose a Disaster"
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-select
                    v-model="selectedEvent"
                    :options="getParticipatingEvents"
                    :text-field="'name'"
                    :value-field="'uid'"
                    required
                    :state="orgFormErrors.hasOwnProperty('participating_event_uid') ? false : null">
                  </b-form-select>
                </b-form-fieldset>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h5>{{ $t('register_org.primary_contact') }}</h5>

              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="First Name" required
                                v-model="contact_firstname"
                                :state="orgFormErrors.contact.hasOwnProperty('firstname') ? false : null"
                  ></b-form-input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-envelope"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="Email" required
                                :state="orgFormErrors.contact.hasOwnProperty('email') ? false : null"
                                v-model="contact_email"></b-form-input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="Last Name" required
                                :state="orgFormErrors.contact.hasOwnProperty('lastname') ? false : null"
                                v-model="contact_lastname"></b-form-input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-phone"></i></span>
                  <b-form-input type="tel" class="form-control" placeholder="Cell Phone Number"
                                :state="orgFormErrors.contact.hasOwnProperty('phone') ? false : null"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required v-model="contact_phone"></b-form-input>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-12">
                <h5>{{ $t('register_org.org_info') }}</h5>
                <h6>{{ $t('register_org.use_local_org_name_msg') }}</h6>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <b-form-input type="text" placeholder="Organization Name" v-model="name"
                                :state="orgFormErrors.hasOwnProperty('name') ? false : null" required></b-form-input>
                  <!--<b-form-invalid-feedback>{{errorName}}</b-form-invalid-feedback>-->
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="Address" required
                                v-model="address" :state="orgFormErrors.hasOwnProperty('address') ? false : null"></b-form-input>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="State" required
                                :state="orgFormErrors.hasOwnProperty('state') ? false : null"
                                v-model="state"></b-form-input>
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="Referral" required
                                :state="orgFormErrors.hasOwnProperty('referral') ? false : null"
                                v-model="referral"></b-form-input>
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-social-facebook"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="Facebook"
                                :state="orgFormErrors.hasOwnProperty('facebook') ? false : null"
                                v-model="facebook"></b-form-input>
                </div>


              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-envelope"></i></span>
                  <b-form-input type="email" class="form-control" placeholder="Email" required
                                :state="orgFormErrors.hasOwnProperty('email') ? false : null"
                                v-model="email"></b-form-input>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="City" required
                                :state="orgFormErrors.hasOwnProperty('city') ? false : null"
                                v-model="city"></b-form-input>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <b-form-input type="text" class="form-control" placeholder="Zip Code" required pattern="[0-9]{5}"
                                :state="orgFormErrors.hasOwnProperty('zip_code') ? false : null"
                                v-model="zip_code"></b-form-input>
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <b-form-input type="url" class="form-control" placeholder="Website"
                                :state="orgFormErrors.hasOwnProperty('url') ? false : null"
                                v-model="url"></b-form-input>
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-social-twitter"></i></span>
                  <b-form-input type="password" class="form-control" placeholder="Twitter"
                                :state="orgFormErrors.hasOwnProperty('twitter') ? false : null"
                                v-model="twitter"></b-form-input>
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-md-12">
                <h5>{{ $t('register_org.org_roles') }}</h5>

              </div>
              <div class="col-md-12">
                  <b-form-checkbox v-model="review_other_organizations">
                    <b>Review & Approve Participating Organizations:</b> You are willing to take a leadership role, reviewing and approving organizations to participate in CrisisCleanup.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_damage_assessment">
                    <b>Damage Assessments:</b> Your organization interacts directly with survivors via call-center, door-to-door, in a MARC, etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_cleanup">
                    <b>Cleanup:</b> Your organization interacts directly with survivors to do muck-outs, debris removal, tree cutting,
                    etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_follow_up">
                    <b>Follow Up:</b> Your organization contacts survivors to ensure all clients have been assisted via phone or in-person visits.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_minor_repairs">
                    <b>Minor Repairs:</b> Your organization visits survivors to replace drywall, flooring, or other repairs.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_rebuilding">
                    <b>Rebuilding:</b> Long Term Recovery Groups, Unmet Needs Committees, or organizations that do long-term or major rebuilding.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_coordination">
                    <b>Coordination:</b> Your organization does NOT interact directly with survivors, but oversees or coordinates organizations that do.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="government">
                    <b>Government:</b> You represent a governmental entity, such as municipal, state, tribal or federal government, emergency management, agency, etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="does_other_activity">
                    <b>Other Activity:</b> Your organization does other disaster-related activity, such as donations management, case management, logistics, for-profit contracting, etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox v-model="not_an_org">
                    <b>Not An Organization:</b> Individuals, unaffiliated volunteers, meetup groups, clubs, etc.
                  </b-form-checkbox>
              </div>

            </div>
            <div class="row">
              <div class="col-md-8">
                <div class="input-group mb-4">
                  <input type="text" class="form-control" placeholder="Where are you working?" v-model="where_are_you_working">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-form-checkbox v-model="publishable">
                  <b>Publicly publish organization profile?</b>
                </b-form-checkbox>
                <br>
                <b-form-checkbox v-model="accepted_terms">
                  <b>I agree to the Terms of Service and Privacy Policy</b>
                </b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button @click="signUp" type="button" class="btn btn-block btn-success btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
        </div>

        <!--</b-form>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {

    name: 'RegisterOrganization',
    data() {
      return {}
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
        this.$store.dispatch('postOrganization');
      }
    },
  }
</script>

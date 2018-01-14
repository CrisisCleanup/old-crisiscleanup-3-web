<template>
  <div>
    <v-loading loader="getSite">
      <template slot='spinner'>
       <div class="row">
        <div class="col">
        <pulse-loader></pulse-loader>
        </div>
       </div>
      </template>
      <div class="row">
        <div class="col">
          <!--
          <button type="button" @click="saveForm" id="save-btn-top" class="btn btn-primary">{{ $t('actions.save') }}</button>
          <button type="button" @click="saveAndClaim" id="save-claim-btn-top" class="btn btn-primary"
                  v-show="isCurrentSiteClaimedByUserOrg || !isSiteClaimed"
                  v-text="isSiteClaimed ? 'Claim' : 'Unclaim'"></button>
          <button type="button" @click="cancel" id="cancel-btn-top" class="btn btn-primary">{{ $t('actions.cancel') }}</button>
          -->
          <div v-show="Object.keys(siteFormErrors).length !== 0" class="alert alert-danger" role="alert">
            <ul>
              <li v-for="(val, key) in siteFormErrors">{{ key }}: {{ val[0] }}</li>
            </ul>
          </div>
          <form>


            <EventForm :site-form-errors="siteFormErrors"
                       v-on:formReady="fireFormReady" ref="eventFormBase"></EventForm>
            <div v-if="isFormReady">
              <!--
              <button type="button" id="save-btn-bottom" @click="saveForm" class="btn btn-primary">{{ $t('actions.save') }}</button>
              <button type="button" id="save-claim-btn-bottom" @click="saveAndClaim" class="btn btn-primary"
                      v-show="isCurrentSiteClaimedByUserOrg || !isSiteClaimed"
                      v-text="isSiteClaimed ? '{{ $t('actions.save_unclaim') }}' : '{{ $t('actions.save_claim') }}'"></button>
              <button type="button" @click="cancel" class="btn btn-primary">{{ $t('actions.cancel') }}</button>-->
            </div>
          </form>
        </div>
      </div>
      <br/>
      <br/>
    </v-loading>
  </div>
</template>

<script>
  import {output} from './irma2.js';
  import Vue from 'vue';
  import {loaded} from 'vue2-google-maps'
  import {mapGetters} from 'vuex';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  const EventForm = Vue.component('EventForm', function (resolve, reject) {
    setTimeout(function () {
      resolve({
        template: '<div>' + output + '</div>',
        props: ['siteFormErrors'],
        computed: {
          legacy_legacy_site: {
            get: function() {
              return this.$store.getters.getCurrentSiteData;
            }
          },
          ...mapGetters('loading', ['isLoading', 'anyLoading'])
        },
        mounted() {
          this.$emit('formReady');
        },
        methods: {
          updateValue (e) {
            let id = e.target.id;
            let fieldId = id.replace('legacy_legacy_site_', '');
            let currentSiteData = Object.assign({}, this.$store.getters.getCurrentSiteData);
            currentSiteData[fieldId] = e.target.value;
            this.$store.commit('setCurrentSiteData', currentSiteData);
          }
        }
      });
    }, 1000);
  });

  export default {
    name: 'IntakeFormAside',
    components: {
      EventForm,
      PulseLoader
    },
    data() {
      return {
        isFormReady: false,

      }
    },
    computed: {
      legacy_site: {
        get() {
          return this.$store.getters.getCurrentSiteData;
        }
      },
      isSiteClaimed() {
        return this.$store.getters.isCurrentSiteClaimed;
      },
      isCurrentSiteClaimedByUserOrg() {
        return this.$store.getters.isCurrentSiteClaimedByUserOrg;
      },
      siteFormErrors() {
        return this.$store.getters.getSiteFormErrors;
      }
    },
    mounted() {
    },
    methods: {
      updateSiteData (obj) {
        let currentSiteData = Object.assign({}, this.$store.getters.getCurrentSiteData, obj);
        this.$store.commit('setCurrentSiteData', currentSiteData);
      },
      fireFormReady() {
        this.isFormReady = true;
        var self = this;
        loaded.then(() => {
          let addressField = this.$refs.eventFormBase.$refs.legacySiteAddress;
          let cityField = this.$refs.eventFormBase.$refs.cityField;
          let countyField = this.$refs.eventFormBase.$refs.countyField;
          let stateField = this.$refs.eventFormBase.$refs.stateField;
          let countryField = this.$refs.eventFormBase.$refs.countryField;
          let zipField = this.$refs.eventFormBase.$refs.zipField;
          let latitudeField = this.$refs.eventFormBase.$refs.latitudeField;
          let longitudeField = this.$refs.eventFormBase.$refs.longitudeField;
          let options = {
            types: ['geocode']
          };
          if (addressField) {
            if (typeof(google.maps.places.Autocomplete) !== 'function') {
              throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?')
            }

            let addressAutocomplete = new google.maps.places.Autocomplete(addressField);
            let workerMapObj = Vue.prototype.$map2();
            addressAutocomplete.bindTo('bounds', workerMapObj);
            addressAutocomplete.addListener('place_changed', fillInAddress);

            function setLatLng (position) {
              if (latitudeField && longitudeField) {
                if (typeof position.lat === 'function') {
                  self.updateSiteData({latitude: position.lat()});
                  self.updateSiteData({longitude: position.lng()});
                } else {
                  latitudeField.value = position.lat;
                  longitudeField.value = position.lng;
                }
              }
            }

            function fillInAddress() {
              var place = addressAutocomplete.getPlace();
              var updateZip = false;
              for (var i = 0; i < place.address_components.length; i++) {
                var addressType = place.address_components[i].types[0];
                switch (addressType) {
                  case 'street_number':
                    self.updateSiteData({address: place.address_components[i].long_name});
                    break;
                  case 'route':
                    const addressCopy = self.legacy_site.address;
                    self.updateSiteData({address: addressCopy + " " + place.address_components[i].long_name});
                    break;
                  case 'locality':
                    if (cityField) {
                      self.updateSiteData({city: place.address_components[i].long_name});
                    }
                    break;
                  case 'administrative_area_level_2':
                    if (countyField) {
                      self.updateSiteData({county: place.address_components[i].long_name});
                    }
                    break;
                  case 'administrative_area_level_1':
                    if (stateField) {
                      self.updateSiteData({state: place.address_components[i].long_name});
                    }
                    break;
                  case 'country':
                    if (countryField) {
                      self.updateSiteData({country: place.address_components[i].long_name});
                    }
                    break;
                  case 'postal_code':
                    if (zipField) {
                      self.updateSiteData({zip_code: place.address_components[i].long_name});
                      updateZip = true;
                    }
                    break;
                  case 'postal_code_suffix':
                    if (zipField && updateZip) {
                      const zipcode_copy = self.legacy_site.zip_code;
                      self.updateSiteData({zip_code: zipcode_copy + "-" + place.address_components[i].long_name});
                    }
                    break;
                }
              }

              if (!place.geometry) {
                return;
              }

              setLatLng(place.geometry.location);

              if (place.geometry.viewport) {
                workerMapObj.fitBounds(place.geometry.viewport);
              } else {
                workerMapObj.setCenter(place.geometry.location);
                workerMapObj.setZoom(17);
              }

              let autocompleteTrackingMarker = new google.maps.Marker({
                draggable: true,
                position: place.geometry.location,
                map: workerMapObj
              });

              autocompleteTrackingMarker.addListener('drag', function () {
                setLatLng(this.position);
              });
            }
          }
        })
      },
      saveForm() {
        this.$store.dispatch('saveSite');
      },
      saveAndClaim() {
        console.log(this.legacy_site);
      },
      cancel() {

      },
    }
  }
</script>

<style>
  .pac-container {
    z-index: 1051 !important;
  }
</style>

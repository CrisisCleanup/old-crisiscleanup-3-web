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
          <div v-show="Object.keys(eventFormData).length > 0">
            <span v-show="eventFormData.claimed_by !== null">Worksite Claimed By: {{eventFormData.claimed_by}}</span>
            <br v-show="eventFormData.claimed_by !== null" />
            <span v-show="eventFormData.case_number !== null">Case Number: {{eventFormData.case_number}}</span>
            <br v-show="workTypes" />
            <span v-show="workTypes">Work Types: {{workTypes}}</span>
          </div>
          <div v-show="Object.keys(siteFormErrors).length !== 0" class="alert alert-danger" role="alert">
            <ul>
              <li v-for="(val, key) in siteFormErrors">{{ key }}: {{ val[0] }}</li>
            </ul>
          </div>
          <form>
            <div v-for="(value, key) in phaseCleanup.fields" ref="eventFormBase">
              <FormSection :title-label="value.label_t"
                           :label-name="key"
                           :form-data="value"
                           :event-form-data="eventFormData"
                           :update-event-form-data="updateEventFormData"
                           :section-level="1"
              ></FormSection>
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

import lodashObject from 'lodash/object';
import EventData1 from '../../definitions/forms/1-hurricane_sandy_recovery.json';
import EventData2 from '../../definitions/forms/2-hattiesburg_ms_tornado.json';
import EventData3 from '../../definitions/forms/3-gordon_bartow_ga_tornado.json';
import EventData4 from '../../definitions/forms/4-moore_ok_tornado.json';
import EventData5 from '../../definitions/forms/5-black_forest_fire_co.json';
import EventData6 from '../../definitions/forms/6-colorado_floods.json';
import EventData7 from '../../definitions/forms/7-midwest_tornadoes.json';
import EventData8 from '../../definitions/forms/8-midwest_winter_floods.json';
import EventData9 from '../../definitions/forms/9-southern_tornadoes_dec_2015.json';
import EventData10 from '../../definitions/forms/10-northern_illinois_tornadoes.json';
import EventData11 from '../../definitions/forms/11-nj_coastal_floods_jan_2016.json';
import EventData12 from '../../definitions/forms/12-eastcoast_snowstorms.json';
import EventData13 from '../../definitions/forms/13-oct_2015_east_coast_floods.json';
import EventData14 from '../../definitions/forms/14-ms_al_tornadoes_feb_2016.json';
import EventData15 from '../../definitions/forms/15-la_ms_tx_flooding_march_2016.json';
import EventData16 from '../../definitions/forms/16-oct_2015_tx_floods.json';
// import EventData17 from '../../definitions/forms/17-va_tornadoes.json';
import EventData18 from '../../definitions/forms/18-louisville_ms_torndao.json';
import EventData19 from '../../definitions/forms/19-texas_oklahoma_floods.json';
import EventData20 from '../../definitions/forms/20-flint_michigan_water_crisis.json';
import EventData21 from '../../definitions/forms/21-long_island_nj_floods.json';
import EventData22 from '../../definitions/forms/22-baxter_springs_ks.json';
import EventData23 from '../../definitions/forms/23-columbia_ms_tornado.json';
import EventData24 from '../../definitions/forms/24-se_michigan_floods.json';
import EventData25 from '../../definitions/forms/25-sc_fast_track_repairs.json';
import EventData26 from '../../definitions/forms/26-lusk_wy_flood.json';
import EventData27 from '../../definitions/forms/27-se_tx_floods_april_2016.json';
import EventData28 from '../../definitions/forms/28-may_2016_tx_floods.json';
import EventData29 from '../../definitions/forms/29-ft_mcmurray_alberta_fire.json';
import EventData30 from '../../definitions/forms/30-wv_va_june_2016_flood.json';
import EventData31 from '../../definitions/forms/31-nederland_cold_springs_fire.json';
import EventData32 from '../../definitions/forms/32-mn_storms_july_2016.json';
import EventData33 from '../../definitions/forms/33-pine_bluffs_wy_hailstorms_jul_2016.json';
import EventData34 from '../../definitions/forms/34-wv_minor_repairs_jun_2016.json';
import EventData35 from '../../definitions/forms/35-roaring_lion_fire.json';
import EventData36 from '../../definitions/forms/36-south_holland_il_flood.json';
import EventData37 from '../../definitions/forms/37-la_ms_flood_aug_2016.json';
import EventData38 from '../../definitions/forms/38-wyoming_mi_tornado_aug_2016.json';
import EventData40 from '../../definitions/forms/40-mn_wi_ia_flood_sep_2016.json';
import EventData41 from '../../definitions/forms/41-hurricane_matthew_all_states.json';
import EventData42 from '../../definitions/forms/42-hurricane_hermine.json';
import EventData43 from '../../definitions/forms/43-gatlinburg_tn_fire.json';
import EventData44 from '../../definitions/forms/44-so_co_winds.json';
import EventData45 from '../../definitions/forms/45-hattiesburg_petal_tornado.json';
import EventData46 from '../../definitions/forms/46-s_ga_tornadoes_jan_2017.json';
import EventData47 from '../../definitions/forms/47-new_orleans_tornadoes_feb_2017.json';
import EventData48 from '../../definitions/forms/48-san_antonio_tx_tornadoes.json';
import EventData49 from '../../definitions/forms/49-il_tornadoes_feb_2017.json';
import EventData50 from '../../definitions/forms/50-eastern_mo_tornadoes_mar_2017.json';
import EventData51 from '../../definitions/forms/51-virginia_beach_tornado_mar_2017.json';
import EventData52 from '../../definitions/forms/52-east_texas_tornadoes_april_2017.json';
import EventData53 from '../../definitions/forms/53-mo_flooding_may_2017.json';
import EventData54 from '../../definitions/forms/54-troy_se_mi_floods_2017.json';
import EventData55 from '../../definitions/forms/55-holmes_county_ms_tornadoes_may_2017.json';
import EventData56 from '../../definitions/forms/56-nw_wi_tornado_may_2017.json';
import EventData57 from '../../definitions/forms/57-mid_mi_floods_june_2017.json';
import EventData58 from '../../definitions/forms/58-illinois_wisconsin_floods_jul_2017.json';
import EventData59 from '../../definitions/forms/59-west_virginia_flood_jul_2017.json';
import EventData60 from '../../definitions/forms/60-hurricane_harvey.json';
import EventData61 from '../../definitions/forms/61-hurricane_irma.json';
import EventData62 from '../../definitions/forms/62-hurricane_nate.json';
import EventData63 from '../../definitions/forms/63-hudson_cedar_rock_nc_tornado.json';
import EventData64 from '../../definitions/forms/64-terremotos_de_m├⌐xico_septiembre_2017.json';
import EventData65 from '../../definitions/forms/65-northern_california_fires.json';
import EventData66 from '../../definitions/forms/66-hurricane_maria.json';
import EventData67 from '../../definitions/forms/67-bowie_county_tx_tornado.json';
import EventData68 from '../../definitions/forms/68-montecito_mudslides.json';
import EventData69 from '../../definitions/forms/69-mi_il_in_floods_feb_2018.json';
import EventData70 from '../../definitions/forms/70-wv_floods_feb_2018.json';
import EventData71 from '../../definitions/forms/71-ma-noreaster.json';

import FormSection from './FormSection.vue'
import coreFields from './coreFields';

import {mapGetters} from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import {loaded} from 'vue2-google-maps'
import Vue from 'vue';

export default {
  data() {
    return {
      cachedWorkTypes: {}
    }
  },
  computed: {
    phaseCleanup: function() {
      const eid = this.$store.state.worker.event.id;
      switch(eid) {
        case 1: return EventData1.phase_cleanup;
        case 2: return EventData2.phase_cleanup;
        case 3: return EventData3.phase_cleanup;
        case 4: return EventData4.phase_cleanup;
        case 5: return EventData5.phase_cleanup;
        case 6: return EventData6.phase_cleanup;
        case 7: return EventData7.phase_cleanup;
        case 8: return EventData8.phase_cleanup;
        case 9: return EventData9.phase_cleanup;
        case 10: return EventData10.phase_cleanup;
        case 11: return EventData11.phase_cleanup;
        case 12: return EventData12.phase_cleanup;
        case 13: return EventData13.phase_cleanup;
        case 14: return EventData14.phase_cleanup;
        case 15: return EventData15.phase_cleanup;
        case 16: return EventData16.phase_cleanup;
        // case 17: return EventData17.phase_cleanup;
        case 18: return EventData18.phase_cleanup;
        case 19: return EventData19.phase_cleanup;
        case 20: return EventData20.phase_cleanup;
        case 21: return EventData21.phase_cleanup;
        case 22: return EventData22.phase_cleanup;
        case 23: return EventData23.phase_cleanup;
        case 24: return EventData24.phase_cleanup;
        case 25: return EventData25.phase_cleanup;
        case 26: return EventData26.phase_cleanup;
        case 27: return EventData27.phase_cleanup;
        case 28: return EventData28.phase_cleanup;
        case 29: return EventData29.phase_cleanup;
        case 30: return EventData30.phase_cleanup;
        case 31: return EventData31.phase_cleanup;
        case 32: return EventData32.phase_cleanup;
        case 33: return EventData33.phase_cleanup;
        case 34: return EventData34.phase_cleanup;
        case 35: return EventData35.phase_cleanup;
        case 36: return EventData36.phase_cleanup;
        case 37: return EventData37.phase_cleanup;
        case 38: return EventData38.phase_cleanup;
        case 39: return EventData39.phase_cleanup;
        case 40: return EventData40.phase_cleanup;
        case 41: return EventData41.phase_cleanup;
        case 42: return EventData42.phase_cleanup;
        case 43: return EventData43.phase_cleanup;
        case 44: return EventData44.phase_cleanup;
        case 45: return EventData45.phase_cleanup;
        case 46: return EventData46.phase_cleanup;
        case 47: return EventData47.phase_cleanup;
        case 48: return EventData48.phase_cleanup;
        case 49: return EventData49.phase_cleanup;
        case 50: return EventData50.phase_cleanup;
        case 51: return EventData51.phase_cleanup;
        case 52: return EventData52.phase_cleanup;
        case 53: return EventData53.phase_cleanup;
        case 54: return EventData54.phase_cleanup;
        case 55: return EventData55.phase_cleanup;
        case 56: return EventData56.phase_cleanup;
        case 57: return EventData57.phase_cleanup;
        case 58: return EventData58.phase_cleanup;
        case 59: return EventData59.phase_cleanup;
        case 60: return EventData60.phase_cleanup;
        case 61: return EventData61.phase_cleanup;
        case 62: return EventData62.phase_cleanup;
        case 63: return EventData63.phase_cleanup;
        case 64: return EventData64.phase_cleanup;
        case 65: return EventData65.phase_cleanup;
        case 66: return EventData66.phase_cleanup;
        case 67: return EventData67.phase_cleanup;
        default: return EventData60.phase_cleanup;
      }
    },
    allFields: function() {
      let sections = [];

      let traverseFields = function (fields, parent={}) {
        for (const key in fields) {
          const value = fields[key];
          if (value['field_type'] === 'section') {
            sections[key] = {
              'work_type': value['if_selected_then_work_type'],
              'children': []
            };
            traverseFields(value.fields, sections[key]);
          } else if (value && value.hasOwnProperty('if_selected_then_work_type')) {
            parent.children[key] = value['if_selected_then_work_type'];
          }
        }
      };

      const fields = this.phaseCleanup.fields;
      traverseFields(fields);
      return sections
    },
    workTypes() {
      if (!this.eventFormData.work_type) {
        return null;
      }
      let splitWorkTypes = this.eventFormData.work_type.split('|||');
      splitWorkTypes = splitWorkTypes.map(function(wt) {
        const words = wt.split('_');
        return words.join(' ');
      });
      return splitWorkTypes.join(', ');
    },
    eventFormData: {
      get: function() {
        this.loadAutocomplete();
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
    },
    ...mapGetters('loading', ['isLoading', 'anyLoading'])
  },
  components: {
    FormSection,
    PulseLoader
  },
  mounted() {
    this.loadAutocomplete();
    this.cachedWorkTypes = this.allFields;
  },
  methods: {
    checkWorkType(parentFieldName, ifSelectedWorksiteType, siteData, existingWorkType) {
      const sectionChildren = this.cachedWorkTypes[parentFieldName].children;
      const sectionWorkType = this.cachedWorkTypes[parentFieldName].work_type;
      let splitWorkTypes = existingWorkType.split('|||');
      let wtSet = new Set(splitWorkTypes.map((item) => { return item.toLowerCase() }));
      let selectedWorkType = null;
      if (ifSelectedWorksiteType && ifSelectedWorksiteType !== 'inherit') {
        selectedWorkType = ifSelectedWorksiteType;
      } else {
        let activeChildrenCount = 0;
        let objects = lodashObject.pick(siteData, Object.keys(sectionChildren));
        lodashObject.forIn(objects, function (value, key) {
          if (value && value !== 'n' && value !== '' && value != 0) {
            activeChildrenCount++
          }
        });
        selectedWorkType = (activeChildrenCount > 0) ? sectionWorkType : null;
      }

      if (selectedWorkType) {
        wtSet.add(selectedWorkType);
      } else {
        wtSet.delete(sectionWorkType);
      }
      return Array.from(wtSet).join('|||');
    },
    updateEventFormData (key, value, parentFieldName, ifSelectedWorksiteType=null, ifSelectedWorksiteTypeParent=null) {
      if (!coreFields.includes(key)) {
        const d1 = this.$store.state.worker.siteData.data;
        const d3 = this.$store.state.worker.siteData;
        let newData = Object.assign({}, d1);
        let baseData = Object.assign({}, d3);
        newData[key] = value;
        baseData['work_type'] = this.checkWorkType(parentFieldName, ifSelectedWorksiteType, newData, d3['work_type']);
        this.$store.commit('setCurrentSiteDataData', {data: newData});
        this.$store.commit('setCurrentSiteData', baseData);
      } else {
        const d2 = this.$store.state.worker.siteData;
        let newData = Object.assign({}, d2);
        newData[key] = value;
        this.$store.commit('setCurrentSiteData', newData);
      }
    },
    updateSiteData (obj) {
      let currentSiteData = Object.assign({}, this.$store.getters.getCurrentSiteData, obj);
      this.$store.commit('setCurrentSiteData', currentSiteData);
    },
    loadAutocomplete() {
      var self = this;
      loaded.then(() => {
        let addressField = document.getElementById('addressCCU');
        let cityField = document.getElementById('cityCCU');
        let countyField = document.getElementById('countyCCU');
        let stateField = document.getElementById('stateCCU');
        let countryField = document.getElementById('countryCCU');
        let zipField = document.getElementById('zip_codeCCU');
        let options = {
          types: ['geocode']
        };
        if (addressField) {
          if (typeof(google.maps.places.Autocomplete) !== 'function') {
            throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?')
          }

          let addressAutocomplete = new google.maps.places.Autocomplete(addressField);
          addressAutocomplete.addListener('place_changed', fillInAddress);
          let workerMapObj = null;
          setTimeout(() => {
              if (window.googMap !== undefined && window.googMap !== null) {
                workerMapObj = window.googMap.$mapObject;
                addressAutocomplete.bindTo('bounds', workerMapObj);
              }
          }, 500);

          function setLatLng (position) {
              if (typeof position.lat === 'function') {
                self.updateSiteData({latitude: position.lat()});
                self.updateSiteData({longitude: position.lng()});
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
                  const addressCopy = self.eventFormData.address;
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
                    const zipcode_copy = self.eventFormData.zip_code;
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
    }

  }
}
</script>

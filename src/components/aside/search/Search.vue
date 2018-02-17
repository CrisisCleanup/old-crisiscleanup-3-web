<template>
  <div>
    <b-form-group label="Search For: ">
      <b-form-radio-group v-model="selectedSearchOption" :options="options"></b-form-radio-group>
    </b-form-group>
    <v-autocomplete :items="items" v-model="item" :get-label='getLabel' :wait='0' :component-item='template'
                    @update-items="update" @item-selected="itemSelected" @item-clicked="itemClicked"
                    :input-attrs="{name: 'input-test', id: 'v-my-autocomplete', class: 'form-control', type: 'search'}">
    </v-autocomplete>
    <br>
    <div class="row">
      <div class="col">
        <component v-bind:is="detailsComponent" :item="item"></component>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .v-autocomplete {
    .v-autocomplete-list {
      z-index: 2000;
      width: 100%;
      background-color: #fff;
      text-align: left;
      border: none;
      border-top: none;
      max-height: 800px;
      overflow-y: auto;
      border-bottom: 1px solid #157977;

      .v-autocomplete-list-item {
        z-index: 2000;
        cursor: pointer;
        background-color: #fff;
        padding: 10px;
        border-bottom: 1px solid #157977;
        border-left: 1px solid #157977;
        border-right: 1px solid #157977;
        abbr {
          opacity: 0.8;
          font-size: 0.8em;
          display: block;
          font-family: sans-serif;
        }
      }
    }
  }
</style>

<script>
  import Vue from 'vue'
  import Autocomplete from 'v-autocomplete';
  import ItemTemplate from './ItemTemplate';
  import OrganizationItemTemplate from './OrganizationItemTemplate';
  import OrganizationDetails from './OrganizationDetails';
  import WorksiteDetails from './WorksiteDetails';
  import PersonItemTemplate from './PersonItemTemplate';
  import PersonDetails from './PersonDetails';
  import ContactItemTemplate from './ContactItemTemplate';
  import ContactDetails from './ContactDetails';

  import 'v-autocomplete/dist/v-autocomplete.css'
  import CCUMapEventHub from '@/events/CCUMapEventHub'

  Vue.use(Autocomplete);

  export default {
    name: 'SearchWorksite',
    components: {'v-autocomplete': Autocomplete},
    data() {
      return {
        item: "",
        items: [],
        itemsApi: [],
        template: null,
        options: [
          {text: 'Worksites', value: 0},
          {text: 'Organizations', value: 1},
          {text: 'Persons', value: 2},
          {text: 'Contacts', value: 3},
        ],
        selectedSearchOption: 0,
        detailsComponent: WorksiteDetails
      }
    },
    methods: {
      getLabel(item) {
        if (item !== null) {
          switch (this.selectedSearchOption) {
            case 0:
              if (item.name !== undefined) {
                return `${item.case_number}: ${item.name} ${item.address} ${item.city} ${item.state} ${item.zip_code}`;
              }
            case 3:
              if (item.first_name !== undefined) {
                return `${item.first_name}`;
              }
            default:
              if (item.name !== undefined) {
                return `${item.name}`;
              }
          }
        }
        return ""
      },
      update(text) {
        if (text !== '') {
          const eventId = this.$store.state.worker.event.event_id;
          switch (this.selectedSearchOption) {
            case 0:
              this.template = ItemTemplate;
              Vue.axios.get(`/worksites?limit=10&legacy_event_id=${eventId}&search=${text}`).then(resp => {
                this.items = resp.data.results;
              });
              break;
            case 1:
              this.template = OrganizationItemTemplate;
              Vue.axios.get(`/organizations?limit=10&name__icontains=${text}`).then(resp => {
                this.items = resp.data.results;
              });
              break;
            case 2:
              this.template = PersonItemTemplate;
              Vue.axios.get(`/persons?limit=10&name__icontains=${text}`).then(resp => {
                this.items = resp.data.results;
              });
              break;
            case 3:
              this.template = ContactItemTemplate;
              Vue.axios.get(`/contacts?limit=10&name__icontains=${text}`).then(resp => {
                console.log(resp.data.results)
                this.items = resp.data.results;
              });
              break;
          }
        }
      },
      itemSelected(item) {
        this.genericSelect(item);
      },
      itemClicked(item) {
        this.genericSelect(item);
      },
      genericSelect(item) {
        if (item !== null && item.name !== undefined) {
          switch (this.selectedSearchOption) {
            case 0:
              this.detailsComponent = WorksiteDetails;
              break;
            case 1:
              this.detailsComponent = OrganizationDetails;
              break;
            case 2:
              this.detailsComponent = PersonDetails;
              break;
          }
        } else (item !== null && item.first_name !== undefined)
        {
          switch (this.selectedSearchOption) {
            case 3:
              this.detailsComponent = ContactDetails;
              break;
          }
        }
      }
    }
  }
</script>

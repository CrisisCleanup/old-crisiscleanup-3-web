<template>
  <v-autocomplete :items="items" v-model="item" :get-label='getLabel' :min-len='0' :component-item='template'
                  @update-items="update" @item-selected="itemSelected" @item-clicked="itemClicked"
                  :input-attrs="{name: 'input-test', id: 'v-my-autocomplete', class: 'form-control'}">
  </v-autocomplete>
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
  import 'v-autocomplete/dist/v-autocomplete.css'
  import CCUMapEventHub from '@/events/CCUMapEventHub'

  Vue.use(Autocomplete);

  export default {
    name: 'SearchWorksite',
    components: {'v-autocomplete': Autocomplete},
    data() {
      return {
        item: {},
        items: [],
        itemsApi: [],
        template: ItemTemplate
      }
    },
    methods: {
      getLabel(item) {
        if (item !== null && item.case_number !== undefined) {
          return `${item.case_number}: ${item.name} ${item.address} ${item.city} ${item.state} ${item.zip_code}`
        }
        return ""
      },
      update(text) {
        if (text !== '') {
          const eventId = this.$store.state.worker.event.id;
          Vue.axios.get(`/worksites?limit=10&legacy_event_id=${eventId}&search=${text}`).then(resp => {
            this.items = resp.data.results;
          });
        }
      },
      itemSelected(item) {
        if (item !== null && item.case_number !== undefined) {
          this.$store.dispatch('getSite', item.id).then(() => {
            CCUMapEventHub.$emit('site-search');
          });
        }
      },
      itemClicked(item) {
        if (item !== null && item.case_number !== undefined) {
          this.$store.dispatch('getSite', item.id).then(() => {
            CCUMapEventHub.$emit('site-search');
          });
        }
      }
    }
  }
</script>

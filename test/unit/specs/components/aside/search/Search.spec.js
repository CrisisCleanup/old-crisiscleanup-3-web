import Search from '@/components/aside/search/Search';
import {mount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import Autocomplete from 'v-autocomplete';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(VueRouter);

describe('WorksiteDetails.vue', function () {

  const worker = {
    state: {
      event: {
        event_id: 2
      }
    },
    getters: {},
    actions: {},
    mutations: {}
  };

  const $store = new Vuex.Store({
    modules: {
      worker: {
        namespaced: true, ...worker
      }
    }
  });

  const createBaseWrapper = (propsData = {}) => {
    return mount(Search, {
      localVue,
      i18n,
      mocks: {$store},
      propsData
    });
  };


  it('should load component', () => {
    const wrapper = createBaseWrapper();
    expect(wrapper.exists()).to.be.true;

    expect(wrapper.vm.$data.item).to.equal("");
    expect(wrapper.vm.$data.items).to.eql([]);
    expect(wrapper.vm.$data.itemsApi).to.eql([]);
  });

  it('should load autocomplete component', () => {
    const wrapper = createBaseWrapper();
    const autocomplete = wrapper.find(Autocomplete);
    expect(autocomplete.isVueInstance()).to.be.true;
  });

  it('should load the proper options', () => {
    const wrapper = createBaseWrapper();
    const formRadioArray = wrapper.findAll('input[type="radio"]');
    expect(formRadioArray).to.have.lengthOf(4);

    const optionLabels = wrapper.findAll('.custom-control-description > span')
    const possibleOptions = ['Worksites', 'Organizations', 'Persons', 'Contacts']
    optionLabels.wrappers.forEach((wrapper, i) => {
      expect(wrapper.text()).to.be.oneOf(possibleOptions);
    });

  });


});

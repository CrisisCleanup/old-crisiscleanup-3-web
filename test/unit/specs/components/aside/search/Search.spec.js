import Search from '@/components/aside/search/Search';
import {shallow, mount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import sinon from "sinon";
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
        namespaced:true, ...worker
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

  describe('Component initialization', function () {

    it('should load component', () => {
      const wrapper = createBaseWrapper();
      expect(wrapper.exists()).to.be.true;

      expect(wrapper.vm.$data.item).to.equal("");
      expect(wrapper.vm.$data.items).to.eql([]);
      expect(wrapper.vm.$data.itemsApi).to.eql([]);
    });

    it('should load autocomplete component', () => {
      const wrapper = createBaseWrapper();
      console.log(wrapper.html());
      const autocomplete = wrapper.find(Autocomplete);
      expect(autocomplete.isVueInstance()).to.be.true;
    });

    it('should load the proper options', () => {
      const wrapper = createBaseWrapper();
      const formRadioArray = wrapper.findAll('input[type="radio"]');
      expect(formRadioArray).to.have.lengthOf(4);

      const optionLabels = wrapper.findAll('.custom-control-description > span')
      optionLabels.wrappers.forEach((wrapper, i) => {
        expect(wrapper.text()).to.be.oneOf(['Worksites', 'Organizations', 'Persons', 'Contacts'])
      });

    });

    // it('should not show if item is null', () => {
    //   const wrapper = createBaseWrapper({
    //     item: null
    //   });
    //   expect(wrapper.isVisible()).to.be.false;
    // });
    //
    // it('should properly show if item is not null', () => {
    //   const mockItem = {
    //     name: 'test',
    //     address: '123 Apple St.',
    //     city: 'New York',
    //     phone: "123-456-7890"
    //   };
    //   const wrapper = createBaseWrapper({
    //     item: mockItem
    //   });
    //   const ddElements = wrapper.findAll('dd');
    //   expect(ddElements.at(0).text()).to.equal(mockItem.name);
    //   expect(ddElements.at(1).text()).to.equal(mockItem.address);
    //   expect(ddElements.at(2).text()).to.equal(mockItem.city);
    //   expect(ddElements.at(3).text()).to.equal(mockItem.phone);
    // });
    //
    // it('should login', () => {
    //   const wrapper = createBaseWrapper({
    //     item: {}
    //   });
    //   const btn = wrapper.find('button');
    //   btn.trigger('click');
    //   expect(getSiteStub.calledOnce).to.be.true;
    // });

  });


});

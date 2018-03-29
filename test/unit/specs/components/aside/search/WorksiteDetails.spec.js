import WorksiteDetails from '@/components/aside/search/WorksiteDetails';
import {shallow, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import sinon from "sinon";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(VueRouter);

describe('WorksiteDetails.vue', function () {

  let getSiteStub = sinon.stub();

  const worker = {
    state: {},
    getters: {},
    actions: {
      getSite: getSiteStub
    },
    mutations: {}
  };

  const $store = new Vuex.Store({
    modules: {
      worker: {
        ...worker
      }
    }
  });

  const createBaseWrapper = (propsData = {}) => {
    return shallow(WorksiteDetails, {
      localVue,
      i18n,
      mocks: {$store},
      propsData
    });
  };

  describe('Component initialization', function () {

    it('should show at load', () => {
      const mockItem = {
        name: 'test',
        address: '123 Apple St.',
        city: 'New York',
        phone: "123-456-7890"
      };
      const wrapper = createBaseWrapper({
        item: mockItem
      });
      expect(wrapper.exists()).to.be.true;
      expect(wrapper.props().item).to.equal(mockItem)
    });

    it('should not show if item is null', () => {
      const wrapper = createBaseWrapper({
        item: null
      });
      expect(wrapper.isVisible()).to.be.false;
    });

    it('should properly show if item is not null', () => {
      const mockItem = {
        name: 'test',
        address: '123 Apple St.',
        city: 'New York',
        phone: "123-456-7890"
      };
      const wrapper = createBaseWrapper({
        item: mockItem
      });
      const ddElements = wrapper.findAll('dd');
      expect(ddElements.at(0).text()).to.equal(mockItem.name);
      expect(ddElements.at(1).text()).to.equal(mockItem.address);
      expect(ddElements.at(2).text()).to.equal(mockItem.city);
      expect(ddElements.at(3).text()).to.equal(mockItem.phone);
    });

    it('should login', () => {
      const wrapper = createBaseWrapper({
        item: {}
      });
      const btn = wrapper.find('button');
      btn.trigger('click');
      expect(getSiteStub.calledOnce).to.be.true;
    });

  });


});

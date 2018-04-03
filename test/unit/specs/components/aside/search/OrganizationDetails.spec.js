import OrganizationDetails from '@/components/aside/search/OrganizationDetails';
import {shallow, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import sinon from "sinon";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('OrganizationDetails.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(OrganizationDetails, {
      localVue,
      i18n,
      propsData
    });
  };

  describe('Component initialization', function () {

    it('should show at load', () => {
      const mockItem = {
        name: 'test',
        address: '123 Apple St.',
        city: 'New York',
        phone: "123-456-7890",
        email: "example@domain.com"
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
        phone: "123-456-7890",
        email: "example@domain.com"
      };
      const wrapper = createBaseWrapper({
        item: mockItem
      });
      const ddElements = wrapper.findAll('dd');
      expect(ddElements.at(0).text()).to.equal(mockItem.name);
      expect(ddElements.at(1).text()).to.equal(mockItem.address);
      expect(ddElements.at(2).text()).to.equal(mockItem.city);
      expect(ddElements.at(3).text()).to.equal(mockItem.phone);
      expect(ddElements.at(4).text()).to.equal(mockItem.email);
    });

  });


});

import PersonDetails from '@/components/aside/search/PersonDetails';
import {shallow, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import sinon from "sinon";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('PersonDetails.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(PersonDetails, {
      localVue,
      i18n,
      propsData
    });
  };

  describe('Component initialization', function () {

    it('should show at load', () => {
      const mockItem = {
        name: 'John Doe',
        role: 'Volunteer',
        title: 'President'

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
        name: 'John Doe',
        role: 'Volunteer',
        title: 'President'

      };
      const wrapper = createBaseWrapper({
        item: mockItem
      });
      const ddElements = wrapper.findAll('dd');
      expect(ddElements.at(0).text()).to.equal(mockItem.name);
      expect(ddElements.at(1).text()).to.equal(mockItem.role);
      expect(ddElements.at(2).text()).to.equal(mockItem.title);

    });

  });

});

import ContactDetails from '@/components/aside/search/ContactDetails';
import {shallow, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import sinon from "sinon";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('ContactDetails.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(ContactDetails, {
      localVue,
      i18n,
      propsData
    });
  };

  describe('Component initialization', function () {

    it('should show at load', () => {
      const mockItem = {
        first_name: 'John Doe',
        is_primary: true,
        title: 'Volunteer',
        organizational_title: "President",
        email: 'example@domain.com'
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
        first_name: 'John Doe',
        is_primary: 'true',
        title: 'Volunteer',
        organizational_title: "President",
        email: 'example@domain.com'
      };
      const wrapper = createBaseWrapper({
        item: mockItem
      });
      const ddElements = wrapper.findAll('dd');
      expect(ddElements.at(0).text()).to.equal(mockItem.first_name);
      expect(ddElements.at(1).text()).to.equal(mockItem.is_primary);
      expect(ddElements.at(2).text()).to.equal(mockItem.title);
      expect(ddElements.at(3).text()).to.equal(mockItem.organizational_title);
      expect(ddElements.at(4).text()).to.equal(mockItem.email);
    });

  });


});

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

  let loginStub = sinon.stub();

  const auth = {
    state: {
      isAuthenticated: false,
      loginErrors: []
    },
    getters: {},
    actions: {
      login: loginStub
    },
    mutations: {
      getSite: sinon.stub()
    }
  };

  const $store = new Vuex.Store({
    modules: {
      auth
    },
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
      const mockItem = {
        name: 'test',
        address: '123 Apple St.',
        city: 'New York',
        phone: "123-456-7890"
      };
      const wrapper = createBaseWrapper({
        item: null
      });
      expect(wrapper.isVisible()).to.be.false;
    });

  });

  // describe('Validation', function () {
  //
  //   it('should have an empty password at load in the UI', () => {
  //     const wrapper = createBaseWrapper();
  //     const testEmail = 'test@example.com'
  //     wrapper.setData({email: testEmail});
  //     const passwordInputField = wrapper.find('#login-email');
  //     // console.log(passwordInputField);
  //     // expect(passwordInputField.attributes().state).to.be.null;
  //   });
  //
  //   it('should have an empty password at load in the UI', () => {
  //     const wrapper = createBaseWrapper();
  //     const testEmail = 'test@example.com'
  //     wrapper.setData({email: testEmail});
  //     const passwordInputField = wrapper.find('#login-email');
  //   });
  // });
  //
  // describe('Test Login', function () {
  //
  //   it('should login', () => {
  //     const wrapper = shallow(Login, {
  //       localVue,
  //       mocks: {$store},
  //       i18n
  //     });
  //     const loginBtn = wrapper.find('#login-submit-btn');
  //     loginBtn.trigger('click');
  //     expect(auth.mutations.setLoginErrors.calledOnce).to.be.true;
  //     expect(loginStub.calledOnce).to.be.true;
  //   });
  //
  //
  // })

});

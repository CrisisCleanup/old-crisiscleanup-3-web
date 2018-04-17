import Login from '@/views/Login';
import {mockRouter, mockHttp, mockStore} from 'vuenit';
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

describe('Login.vue', function () {

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
      setLoginErrors: sinon.stub()
    }
  };

  const $store = new Vuex.Store({
    modules: {
      auth: {
        namespaced: true, ...auth
      }
    },
  });


  const createBaseWrapper = () => {
    return shallow(Login, {
      localVue,
      mocks: {$store},
      i18n
    });
  };

  describe('Component initialization', function () {

    it('should have an empty email and password at load', () => {
      const wrapper = createBaseWrapper();
      expect(wrapper.vm.$data.email).to.equal('');
      expect(wrapper.vm.$data.password).to.equal('');
    });

    it('should have an empty email at load in the UI', () => {
      const wrapper = createBaseWrapper();
      const emailInput = wrapper.find('#login-email');
      expect(emailInput.exists());
      expect(emailInput.text()).to.equal('');
    });

    it('should have an empty password at load in the UI', () => {
      const wrapper = createBaseWrapper();
      const passwordInputField = wrapper.find('#login-password');
      expect(passwordInputField.exists());
      expect(passwordInputField.text()).to.equal('');
    });

  });

  describe('Validation', function () {

  });

  describe('Test Login', function () {

    it('should login', () => {
      const wrapper = shallow(Login, {
        localVue,
        mocks: {$store},
        i18n
      });
      const loginBtn = wrapper.find('#login-submit-btn');
      loginBtn.trigger('click');
      //expect(wrapper.vm.$data.loginTriggered).to.be.true;
      //expect(auth.mutations.setLoginErrors.calledOnce).to.be.true;
      //expect(loginStub.calledOnce).to.be.true;
      expect(auth.mutations.setLoginErrors.calledOnce).to.be.true;
      expect(loginStub.calledOnce).to.be.true;
    });


  })

});

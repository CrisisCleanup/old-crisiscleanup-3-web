import Header from '@/components/Header';
import BootstrapVue from 'bootstrap-vue'
import {mockRouter, mockHttp, mockStore} from 'vuenit';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import sinon from 'sinon';


const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Header.vue', () => {
  localVue.use(Vuex);
  const worker = {
    state: {
      participatingEvents: [],
      event: {
        event_id: 1
      }
    },
    getters: {
      getParticipatingEvents: state => state.participatingEvents,
      getCurrentEvent: state => state.event
    },
    actions: {
      getParticipatingEvents() {},
      logout() {},
      changeEventContext() {}
    }
  };

  const auth = {
    namespaced: true,
    getters: {
      getUserName: sinon.stub()
    },
    actions: {
      logout: sinon.stub()
    }
  };

  const $store = new Vuex.Store({
    modules: {
      worker,
      auth
    }
  });

  afterEach(function () {
    document.body.className = ""
  });

  it('sidebar can be minimized', () => {
    let wrapper = mount(Header, {localVue, i18n, mocks: {$store}});
    const button = wrapper.find('button.sidebar-toggler');
    button.trigger('click');
    expect(document.body.classList[0]).to.contain('sidebar-minimized')
  });

  it('mobile sidebar can be minimized', () => {
    let wrapper = mount(Header, {localVue, i18n, mocks: {$store}});
    const button = wrapper.find('button.mobile-sidebar-toggler');
    button.trigger('click');
    expect(Object.values(document.body.classList)).to.include('sidebar-mobile-show')
  });

  it('aside can be toggled', () => {
    let wrapper = mount(Header, {localVue, i18n, mocks: {$store}});
    const button = wrapper.find('button.aside-menu-toggler');
    button.trigger('click');
    expect(Object.values(document.body.classList)).to.include('aside-menu-hidden')
  });

  it('can logout with vue-test-utils', () => {

    const {$router} = mockRouter();
    const wrapper = mount(Header, {
      localVue,
      i18n,
      mocks: {
        $router,
        $store
      }
    });
    const button = wrapper.find('#logout-btn');
    button.trigger('click');
    expect($router.currentRoute.path).to.equal('/')
  });

  /*
  it('can logout with vuenit', () => {
    const {$router} = mockRouter();
    const $http = mockHttp();
    const $store = mockStore();

    const options = {
      inject: { $router, $store, i18n}
    };

    const vm = mount2(Header, options);
    vm.$trigger(vm.$find('#logout-btn'), 'click');
    expect($router.currentRoute.path).to.equal('/')

  });
  */

  /*
  it('can logout with sinon stub', () => {
    const $router = { push: () => { return sinon.stub() } }
    const wrapper = mount(Header, {
      localVue,
      mocks: {
        $router
      }
    });
    const button = wrapper.find('#logout-btn');
    button.trigger('click');
    expect(wrapper.vm.$router.path).to.equal("/")
  });
  */

});

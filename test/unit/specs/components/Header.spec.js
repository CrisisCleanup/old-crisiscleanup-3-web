import Header from '@/components/Header';
import BootstrapVue from 'bootstrap-vue'
import {mount as mount2, mockRouter, mockHttp, mockStore} from 'vuenit';
import { mount, shallow, createLocalVue } from 'vue-test-utils';
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(BootstrapVue);


describe('Header.vue', () => {
  let wrapper = mount(Header, {localVue});

  afterEach(function () {
    document.body.className = ""
  });

  it('has a created hook', () => {
    // expect(typeof wrapper).to.equal('object');
    // expect(typeof wrapper.vm.methods).to.equal('object')
  });

  it('sidebar can be minimized', () => {
    const button = wrapper.find('button.sidebar-toggler');
    button.trigger('click');
    expect(document.body.classList[0]).to.contain('sidebar-minimized')
  });

  it('mobile sidebar can be minimized', () => {
    const button = wrapper.find('button.mobile-sidebar-toggler');
    button.trigger('click');
    expect(Object.values(document.body.classList)).to.include('sidebar-mobile-show')
  });

  it('aside can be toggled', () => {
    const button = wrapper.find('button.aside-menu-toggler');
    button.trigger('click');
    expect(Object.values(document.body.classList)).to.include('aside-menu-hidden')
  });

  it('can logout with vue-test-utils', () => {

    const {$router} = mockRouter();
    const wrapper = mount(Header, {
      localVue,
      mocks: {
        $router
      }
    });
    const button = wrapper.find('#logout-btn');
    button.trigger('click');
    expect($router.currentRoute.path).to.equal('/')
  });

  it('can logout with vue-test-utils with actual vue-router instance', () => {

    localVue.use(VueRouter);

    const routes = [
      { path: '/', component: Header }
    ];

    const router = new VueRouter({
      routes
    });

    const wrapper = mount(Header, {
      localVue,
      router,
    });
    const button = wrapper.find('#logout-btn');
    button.trigger('click');
    expect(wrapper.vm.$route.path).to.equal("/")
  });

  it('can logout with vuenit', () => {
    const {$router} = mockRouter();
    const $http = mockHttp();
    const $store = mockStore();

    const options = {
      inject: { $router, $store}
    };

    const vm = mount2(Header, options);
    vm.$trigger(vm.$find('#logout-btn'), 'click');
    expect($router.currentRoute.path).to.equal('/')

  });

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

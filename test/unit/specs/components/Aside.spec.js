import Aside from '@/components/Aside';
import {mockRouter, mockHttp, mockStore} from 'vuenit';
import { mount, shallow, createLocalVue } from 'vue-test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'


describe('Aside.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({
    getters: {}
  });
  const wrapper = shallow(Aside, {
    localVue,
    store
  });

  beforeEach(() => {
    localVue.use(VueRouter);
  });

  afterEach(function () {
    document.body.className = ""
  });

  it('has a created hook', () => {
    // expect(wrapper.contains('aside')).to.be.true;
    console.log(wrapper.text())
    // expect(typeof wrapper.vm).to.equal('object');
    // expect(typeof wrapper.vm.methods).to.equal('object')
  });

});

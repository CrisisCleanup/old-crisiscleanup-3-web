import Worksites from '@/components/dashboard/Worksites.vue';
import {shallow, mount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import sinon from "sinon";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Worksites.vue', () => {

  let worker = null;
  let $store = null;

  beforeEach(function () {

    worker = {
      state: {},
      getters: {
        getDashboardWorksites: () => {
          return {
            worksites: [
              {},
              {},
              {},
              {},
              {},
            ]
          }
        }
      },
      actions: {
        getDashboardWorksites: sinon.spy(),
        nextDashboardWorksites: sinon.spy(),
        previousDashboardWorksites: sinon.spy()
      },
      mutations: {}
    };

    $store = new Vuex.Store({
      modules: {
        worker: {
          ...worker
        }
      }
    });

  });

  const createBaseWrapper = (propsData = {}) => {
    return shallow(Worksites, {
      localVue,
      i18n,
      mocks: {$store},
      propsData
    });
  };

  it('should show at load', () => {
    const wrapper = createBaseWrapper({});
    expect(wrapper.exists()).to.be.true;
    expect(worker.actions.getDashboardWorksites.calledOnce).to.be.true;
  });

  it('should go to the next worksites', function () {
    const wrapper = createBaseWrapper();
    const anchors = wrapper.findAll('a');
    anchors.at(1).trigger('click');
    expect(worker.actions.nextDashboardWorksites.calledOnce).to.be.true;
    expect(worker.actions.previousDashboardWorksites.called).to.be.false;
  });

  it('should go to the previous worksites', function () {
    const wrapper = createBaseWrapper();
    const anchors = wrapper.findAll('a');
    anchors.at(0).trigger('click');
    expect(worker.actions.previousDashboardWorksites.calledOnce).to.be.true;
    expect(worker.actions.nextDashboardWorksites.called).to.be.false;
  });


});

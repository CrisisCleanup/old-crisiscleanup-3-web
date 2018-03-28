import {shallow, createLocalVue} from '@vue/test-utils';
import InviteTeammates from '@/components/dashboard/InviteTeammates';
import i18n from '@/services/i18n';
import sinon from "sinon";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('InviteTeammates.vue', function () {

  const worker = {
    state: {},
    getters: {
      getLoginFormErrors: () => {
        return {
          'errors': []
        }
      }
    },
    actions: {
      sendInvites: sinon.stub()
    },
    mutations: {
      setLoginErrors: sinon.stub()
    }
  };



  const buildWrapper = ($store) => {
    return shallow(InviteTeammates, {
      localVue,
      i18n,
      mocks: {$store}
    });
  };

  it('single email invite with promise', async function () {
    const $store = new Vuex.Store({
      modules: {
        worker
      }
    });
    const wrapper = buildWrapper($store);
    const submitBtn = wrapper.find('button')
    await submitBtn.trigger('click');
    expect(wrapper.vm.$data.successfulInvites).to.be.true;
    expect(wrapper.vm.$data.invitees).to.equal("");
  });

  it('single email invite with errors', async function() {
    worker.actions.sendInvites = sinon.stub().resolves("")
    const $store = new Vuex.Store({
      modules: {
        worker
      }
    });
    const wrapper = buildWrapper($store);
    const submitInvitesBtn = wrapper.find('button');
    await submitInvitesBtn.trigger('click');
    // expect(wrapper.vm.$data.formErrors).to.be.true;
  });


});

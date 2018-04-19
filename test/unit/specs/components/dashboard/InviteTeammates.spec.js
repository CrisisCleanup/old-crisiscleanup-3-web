import {shallow, createLocalVue} from '@vue/test-utils';
import InviteTeammates from '@/components/dashboard/InviteTeammates';
import i18n from '@/services/i18n';
import sinon from "sinon";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('InviteTeammates.vue', function () {

  let worker;

  beforeEach(function () {

    worker = {
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
  });

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

  it('single email invite with errors', async function () {
    const errorMessage = {msg: "there is an error"};
    worker.actions.sendInvites = sinon.stub().rejects(errorMessage);
    const $store = new Vuex.Store({
      modules: {
        worker
      }
    });
    const wrapper = buildWrapper($store);
    const submitInvitesBtn = wrapper.find('button');
    await submitInvitesBtn.trigger('click');
    expect(wrapper.vm.$data.errorMessage).to.equal(errorMessage.msg);
  });

  it('should send a list of emails');


});

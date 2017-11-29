import {shallow, mount} from 'vue-test-utils';
import InviteTeammates from '@/components/dashboard/InviteTeammates';
import sinon from "sinon";
import mockHttp from 'mock-http-client';

describe('InviteTeammates.vue', function() {

  describe('Send invite', function () {

    it('single email invite with promise', async function() {

      let p = new Promise((resolve, reject) => {
        resolve('Awesome')
        // reject(true)
      });
      const $http = { post: () => p }
      const wrapper = shallow(InviteTeammates, { mocks: { $http } });
      // wrapper.vm.$http = http;

      const submitInvitesBtn = wrapper.find('button');
      await submitInvitesBtn.trigger('click');
      await expect(wrapper.vm.hasErrors).to.be.false;
      await expect(wrapper.vm.successfulInvites).to.be.true;
      await expect(wrapper.vm.invitees).to.equal("");

    });

    it('single email invite with vuenit', async function() {
      const $http = mockHttp();
      $http.when('post', `${process.env.API_ENDPOINT}/invites`).return('this is a test');
      const wrapper = shallow(InviteTeammates, { mocks: { $http } });
      // wrapper.vm.$http = http;

      const submitInvitesBtn = wrapper.find('button');
      await submitInvitesBtn.trigger('click');
      await expect(wrapper.vm.hasErrors).to.be.false;
      await expect(wrapper.vm.successfulInvites).to.be.true;
      await expect(wrapper.vm.invitees).to.equal("");

    });

    it('single email invite with errors', async function() {

      let p = Promise.reject('fail'); //.catch(() => {})
      const $http = { post: () => p }
      const wrapper = shallow(InviteTeammates, { mocks: { $http } });
      // wrapper.vm.$http = http;

      const submitInvitesBtn = wrapper.find('button');
      await submitInvitesBtn.trigger('click');
      await expect(wrapper.vm.hasErrors).to.be.true;
      // await expect(wrapper.vm.successfulInvites).to.be.true;
      // await expect(wrapper.vm.invitees).to.equal("");

    });

  });

});

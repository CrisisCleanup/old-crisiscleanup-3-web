import Worksites from '@/components/dashboard/Worksites.vue';
import sinon from "sinon";
import {shallow, mount, createLocalVue} from '@vue/test-utils';
// import {mount, shallow, cre} from 'avoriaz'
import Vuex from 'vuex'


describe('Worksites.vue', () => {

  /*
  describe('Pull worksites', function () {
   const localVue = createLocalVue();
    localVue.use(Vuex);
    let getters;
    let store;
    let actions;
    let state;

    beforeEach(() => {
      // state = {
      //   worksites: []
      // }
      actions = {
        getWorksites: sinon.stub()
      }
      // getters = {
      //   getWorksites: (state) => state.worksites,
      // };
      store = new Vuex.Store({
        state: {},
        actions
      });
        // , getters: getters });
    });

    it('should get worksites', () => {
      const wrapper = shallow(Worksites, {
        localVue,
        store
      });
      // wrapper.vm.$store = store;
      // await console.log(wrapper.vm.sites)
      expect(actions.getWorksites.calledOnce).to.be.true
      // await expect(wrapper.vm.sites).to.have.deep.members(results);
    });

  });
  */

});

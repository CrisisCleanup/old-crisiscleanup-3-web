import {shallow, mount} from 'vue-test-utils';
import IntakeFormAside from '@/components/aside/worksite/IntakeFormAside';
import sinon from "sinon";
import {mockStore} from 'vuenit';

describe('IntakeFormAside.vue', () => {
  let getters;
  let $store;

  beforeEach(() => {
    getters = {
      getCurrentSiteData: '',
      isCurrentSiteClaimed: true,
      isCurrentSiteClaimedByUserOrg: true,
      getSiteFormErrors: []
    };

    $store = {
      getters: getters
    }

  });

  describe('basics', function () {

    it('can render', () => {

      const wrapper = shallow(IntakeFormAside, {
        mocks: {
          $store
        }
      });

      const div = wrapper.find('div');
      expect(div.is('div')).to.be.true;

      const buttons = wrapper.vm.buttons;
      const wrapperArray = wrapper.findAll('.button');
      for (let [index, element] of wrapperArray.wrappers.entries()) {
        assert(element.text() === buttons[index].text)
      }

    });

    it('lower buttons only appear when form is ready', () => {

      const wrapper = shallow(IntakeFormAside, {mocks: {$store}});
      expect(wrapper.isEmpty()).to.not.be.true;
      expect(wrapper.name()).to.equal('IntakeFormAside');
      const container = wrapper.find('.container-fluid');
      expect(container.hasStyle('padding-top', '75px')).to.be.true;

      let allButtons = wrapper.findAll('button');
      expect(allButtons.length).to.equal(3);

      wrapper.setData({isFormReady: true});

      allButtons = wrapper.findAll('button');
      expect(allButtons.length).to.equal(6)

    });


  })

  describe('Form saving', () => {
    let wrapper;
    const btnStub = sinon.stub();

    beforeEach(() => {
      wrapper = shallow(IntakeFormAside, {mocks: {$store}});
    });

    it('should allow user to click top save btn to save form', () => {
      wrapper.setMethods({saveForm: btnStub});
      wrapper.find('#save-btn-top').trigger('click');
      expect(btnStub.called).to.be.true
    });

    it('should allow user to click top save and claim btn to save form', () => {
      wrapper.setMethods({saveAndClaim: btnStub});
      wrapper.find('#save-claim-btn-top').trigger('click');
      expect(btnStub.called).to.be.true
    });

    it('should allow user to click bottom save btn to save form', () => {
      wrapper.setData({isFormReady: true});
      wrapper.setMethods({saveForm: btnStub});
      wrapper.find('#save-btn-bottom').trigger('click');
      expect(btnStub.called).to.be.true
    });

    it('should allow user to click bottom save and claim btn to save form', () => {
      wrapper.setData({isFormReady: true});
      wrapper.setMethods({saveAndClaim: btnStub});
      wrapper.find('#save-claim-btn-bottom').trigger('click');
      expect(btnStub.called).to.be.true
    });
  });

  describe('Save and Claim visiblity', () => {
    let wrapper;
    const btnStub = sinon.stub();

    beforeEach(() => {
      getters = {
        getCurrentSiteData: '',
        isCurrentSiteClaimed: false,
        isCurrentSiteClaimedByUserOrg: false,
        getSiteFormErrors: []
      };
    });

    it('should NOT show save and claim if already claimed', () => {
      getters.isCurrentSiteClaimed = true;
      $store = { getters: getters }
      wrapper = shallow(IntakeFormAside, {mocks: { $store }});
      const btn = wrapper.find('#save-claim-btn-top');
      expect(btn.hasStyle('display', 'none')).to.be.true
    })

    it('should show save and claim if site is claimed by user org', () => {
      getters.isCurrentSiteClaimedByUserOrg = true;
      $store = { getters: getters }
      wrapper = shallow(IntakeFormAside, {mocks: {$store}});
      const btn = wrapper.find('#save-claim-btn-top');
      expect(btn.hasStyle('display', 'none')).to.be.false
      expect(btn.text()).to.include('Save & Claim')
    })

    it('should show save and claim if site is claimed by user org', () => {
      getters.isCurrentSiteClaimedByUserOrg = true;
      getters.isCurrentSiteClaimed = true;
      $store = { getters: getters }
      wrapper = shallow(IntakeFormAside, {mocks: {$store}});
      const btn = wrapper.find('#save-claim-btn-top');
      expect(btn.hasStyle('display', 'none')).to.be.false
      expect(btn.text()).to.include('Save & Unclaim')
    })

  });

});


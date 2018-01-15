import {shallow, mount} from 'vue-test-utils';
import QuickStatCard from '@/components/dashboard/QuickStatCard';
import sinon from "sinon";
import mockHttp from 'mock-http-client';

describe('QuickStatCard.vue', function() {

  describe('basics', function () {

    it('can render', function () {
      const statName = 'Worksites completed';
      const statQuantity =  '30293';
      const className = 'bg-primary';

      const wrapper = shallow(QuickStatCard, {
        propsData: {
          statName: statName,
          statQuantity: statQuantity,
          cardColorClass: className
        }
      });

      const statNameWrapper = wrapper.find('#statNameId');
      expect(statNameWrapper.text()).to.eq(statName);
      const statQuantityWrapper = wrapper.find('#statQuantityId');
      expect(statQuantityWrapper.text()).to.eq(statQuantity);
      const bCardWrapper = wrapper.find('b-card');
      expect(bCardWrapper.hasClass(className)).to.be.true;
    });
  });
});

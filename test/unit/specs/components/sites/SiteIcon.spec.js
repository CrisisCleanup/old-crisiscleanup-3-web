import {shallow, mount} from 'vue-test-utils';
import SiteIcon from '@/components/sites/SiteIcon.vue';
import sinon from "sinon";

describe('SiteIcon.vue', function() {

  describe('Status colors', function() {
    it('should be green if closed, completed', function() {
      const wrapper = shallow(SiteIcon, {
        propsData: {
          siteStatus: 'Closed, completed',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.hasStyle('color', '#32cd32')).to.be.true;
    });

    it('should be yellow if Open, Assigned', function() {
      const wrapper = shallow(SiteIcon, {
        propsData: {
          siteStatus: 'Open, assigned',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.hasStyle('color', '#fff000')).to.be.true;
    });

    it('should be yellow if Open, partially completed', function() {
      const wrapper = shallow(SiteIcon, {
        propsData: {
          siteStatus: 'Open, partially completed',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.hasStyle('color', '#fff000')).to.be.true;
    });

    it('should be gray if other closed', function() {
      const wrapper = shallow(SiteIcon, {
        propsData: {
          siteStatus: 'Closed, other',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.hasStyle('color', '#808080')).to.be.true;
    });

    it('should be orange if claimed', function() {
      const wrapper = shallow(SiteIcon, {
        propsData: {
          siteStatus: 'something else',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.hasStyle('color', '#ffa500')).to.be.true;
    });
  });

});

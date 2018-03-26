import {shallow} from 'vue-test-utils';
import SiteIcon from '@/components/sites/SiteIcon.vue';
import i18n from '@/services/i18n';

describe('SiteIcon.vue', function() {

  describe('Status colors', function() {
    it('should be green if closed, completed', function() {
      const wrapper = shallow(SiteIcon, {
        i18n,
        propsData: {
          siteStatus: 'Closed, completed',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.element.style.color).to.equal('rgb(50, 205, 50)');
    });

    it('should be yellow if Open, Assigned', function() {
      const wrapper = shallow(SiteIcon, {
        i18n,
        propsData: {
          siteStatus: 'Open, assigned',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.element.style.color).to.equal('rgb(255, 240, 0)');
    });

    it('should be yellow if Open, partially completed', function() {
      const wrapper = shallow(SiteIcon, {
        i18n,
        propsData: {
          siteStatus: 'Open, partially completed',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.element.style.color).to.equal('rgb(255, 240, 0)');
    });

    it('should be gray if other closed', function() {
      const wrapper = shallow(SiteIcon, {
        i18n,
        propsData: {
          siteStatus: 'Closed, other',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.element.style.color).to.equal('rgb(128, 128, 128)');
    });

    it('should be orange if claimed', function() {
      const wrapper = shallow(SiteIcon, {
        i18n,
        propsData: {
          siteStatus: 'something else',
          siteId: 22
        }
      });
      const icon = wrapper.find('i');
      expect(icon.element.style.color).to.equal('rgb(255, 165, 0)');
    });
  });

});

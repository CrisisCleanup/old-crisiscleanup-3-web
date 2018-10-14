import OrganizationItemTemplate from '@/components/aside/search/OrganizationItemTemplate';
import {shallow, createLocalVue} from '@vue/test-utils';

const localVue = createLocalVue();

describe('OrganizationItemTemplate.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(OrganizationItemTemplate, {
      localVue,
      propsData
    });
  };

  it('should show proper data', () => {
    const mockItem = {
      name: 'test',
    };

    const wrapper = createBaseWrapper({
      item: mockItem,
      searchText: ''
    });

    expect(wrapper.exists()).to.be.true;
    expect(wrapper.props().item).to.equal(mockItem)
    expect(wrapper.find('span').text()).to.equal(mockItem.name);

  });

});

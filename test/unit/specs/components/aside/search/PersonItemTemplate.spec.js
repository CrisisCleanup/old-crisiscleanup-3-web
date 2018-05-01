import PersonItemTemplate from '@/components/aside/search/PersonItemTemplate';
import {shallow, createLocalVue} from '@vue/test-utils';

const localVue = createLocalVue();

describe('PersonItemTemplate.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(PersonItemTemplate, {
      localVue,
      propsData
    });
  };

  it('should show proper data', () => {
    const mockItem = {
      name: 'John Doe',

    };
    const wrapper = createBaseWrapper({
      item: mockItem
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.props().item).to.equal(mockItem)
    expect(wrapper.find('span').text()).to.equal(mockItem.name);

  });

});

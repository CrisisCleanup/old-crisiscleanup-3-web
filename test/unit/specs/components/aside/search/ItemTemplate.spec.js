import ItemTemplate from '@/components/aside/search/ItemTemplate';
import {shallow, createLocalVue} from '@vue/test-utils';

const localVue = createLocalVue();

describe('ItemTemplate.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(ItemTemplate, {
      localVue,
      propsData
    });
  };

  it('should show proper data', () => {
    const mockItem = {
      case_number: 'C1234',
      name: 'test',
      address: '123 Apple St.',
      city: 'New York',
      state: 'NY',
      zip_code: "12345"
    };
    const wrapper = createBaseWrapper({
      item: mockItem
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.props().item).to.equal(mockItem)

    expect(wrapper.find('b').text()).to.equal(mockItem.case_number);
    expect(wrapper.find('span').text()).to.equal(mockItem.name);
    const correctAbbr = `${mockItem.address} ${mockItem.city} ${mockItem.state} ${mockItem.zip_code}`
    expect(wrapper.find('abbr').text()).to.equal(correctAbbr);
  });

});

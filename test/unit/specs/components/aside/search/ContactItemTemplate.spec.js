import ContactItemTemplate from '@/components/aside/search/ContactItemTemplate';
import {shallow, createLocalVue} from '@vue/test-utils';

const localVue = createLocalVue();

describe('ContactItemTemplate.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(ContactItemTemplate, {
      localVue,
      propsData
    });
  };

  it('should show proper data', () => {
    const mockItem = {
      first_name: 'John',
      last_name: 'Doe'
    };
    const wrapper = createBaseWrapper({
      item: mockItem
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.props().item).to.equal(mockItem)

    const correctAbbr = `${mockItem.first_name} ${mockItem.last_name}`
    expect(wrapper.find('span').text()).to.equal(correctAbbr);
  });

});

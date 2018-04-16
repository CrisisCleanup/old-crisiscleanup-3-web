import TextField from '@/components/form/TextField';
import {shallow, createLocalVue} from '@vue/test-utils';
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('TextField.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(TextField, {
      localVue,
      i18n,
      propsData
    });
  };

  it('should render', () => {
    const wrapper = createBaseWrapper({});
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVisible()).to.be.true;
  });

  it('should show required label', () => {
    const wrapper = createBaseWrapper({
      isRequired: true
    });
    expect(wrapper.find({ref: 'isRequiredAsterisk'}).exists()).to.be.true;
  });

  it('should NOT show required label', () => {
    const wrapper = createBaseWrapper({
      isRequired: false
    });
    expect(wrapper.find({ref: 'isRequiredAsterisk'}).exists()).to.be.false;
  });

  it('should present help text', () => {
    const wrapper = createBaseWrapper({
      helpTextT: 'unitTest.t1'
    });
    expect(wrapper.find({ref: 'helpTextSpan'}).attributes()['data-original-title']).to.equal('TEST');
  });

  it('should NOT present help text', () => {
    const wrapper = createBaseWrapper({});
    console.log(wrapper.html());
    expect(wrapper.find({ref: 'helpTextSpan'}).exists()).to.be.false;
  });

  it('should show allow break edit glass button');

  it('should NOT show allow break edit glass button');

  it('should enable the input text field when break glass edit button is enabled and clicked');

  it('should mark the input field readonly if isReadonly prop is true');

  it('should make the input field required if isRequired prop is true');

  it('should display the proper input value for the input field based on the value prop');

  it('should trigger an input event and update the value for the updateValue function prop');

});

import SelectField from '@/components/form/SelectField';
import {shallow, createLocalVue} from '@vue/test-utils';
import i18n from '@/services/i18n';
import BootstrapVue from 'bootstrap-vue'
import sinon from "sinon";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('SelectField.vue', function () {

  const createBaseWrapper = (propsData = {}) => {
    return shallow(SelectField, {
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
    expect(wrapper.find({ref: 'helpTextSpan'}).exists()).to.be.false;
  });

  it('should mark the input field readonly if isReadonly prop is true', () => {
  const wrapper = createBaseWrapper({
    isReadonly: true
  });
  expect(wrapper.find('select').attributes()['readonly']).to.equal('readonly');
  //console.log(wrapper.find('option').attributes()['readonly']);
});

  it('should make the input field required if isRequired prop is true', () => {
  const wrapper = createBaseWrapper({
    isRequired: true
  });
  expect(wrapper.find('select').attributes()['required']).to.equal('required');

});

  it('should display the proper input value for the input field based on the value prop');

  it('should trigger an input event and update the value for the updateValue function prop', function() {
    let updateValueStub = sinon.stub();
    const wrapper = createBaseWrapper({
      updateValue: updateValueStub
    });
    wrapper.find('select').trigger('change');
    expect(updateValueStub.calledOnce).to.be.true;
  });
});

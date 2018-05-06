var hurricaneHarveyFormDefinition = require('../definitions/forms/60-hurricane_harvey.json');
const util = require('util');
var eventform_helper = require('./eventform/eventform_helper');


module.exports = {
  '@tags': ['proto'],
  'test traverse': function (browser) {
    eventform_helper.login(browser);
    browser.page.leftaside().clickWorkerMapLink();

    browser.page.header().setEventContext(60);

    let eventform = browser.page.eventform();
    eventform.expect.element('@newWorksiteBtn').to.be.visible;
    eventform.createNewWorksite();

    let sectionCallback = (key, value) => {
      // console.log('SECTION: ', key);
      // eventform.expect.element(`#ccu-section-${key}`).to.be.visible;
    };

    const coreFields = {
      'name': 'Mary Doe',
      'address': '5214 Lyons Avenue'
    };

    let fieldCallback = (key, value) => {
      // console.log('FIELD: ', key);
      if (Object.keys(coreFields).includes(key)) {
        const field = coreFields[key];

        eventform.expect.element(`#${key}CCU`).to.be.visible;
        if (key === 'address') {
          eventform.setValue(`#${key}CCU`, field);
          browser.moveToElement(`#${key}CCU`, 10, 10, function() {
            browser.setValue(`#${key}CCU`, browser.Keys.ARROW_DOWN);
            browser.setValue(`#${key}CCU`, browser.Keys.ARROW_DOWN);
            browser.setValue(`#${key}CCU`, browser.Keys.ENTER)
            browser.pause(8000)
            browser.expect.element('#cityCCU').to.have.value.not.equals('');
            browser.expect.element('#countyCCU').to.have.value.not.equals('');
            browser.expect.element('#stateCCU').to.have.value.not.equals('');
            browser.expect.element('#zip_codeCCU').to.have.value.not.equals('');
          });
        } else {
          eventform.setValue(`#${key}CCU`, field);

        }


      }
    };

    const fields = hurricaneHarveyFormDefinition.phase_cleanup.fields;
    const sections = eventform_helper.traverseEventDefinition(fields, sectionCallback, fieldCallback);
    // console.log(JSON.stringify(sections, null, 2))
    // console.log(util.inspect(sections, false, null))
    browser.end()
  },
};
// body > div:nth-child(9)

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
      console.log('SECTION: ', key);
      eventform.expect.element(`#ccu-section-${key}`).to.be.visible;
    };

    let fieldCallback = (key, value) => {
      console.log('FIELD: ', key);
      if (!['latitude', 'longitude'].includes(key)) {
        eventform.expect.element(`#${key}CCU`).to.be.visible;
      }
    };

    const fields = hurricaneHarveyFormDefinition.phase_cleanup.fields;
    const sections = eventform_helper.traverseEventDefinition(fields, sectionCallback, fieldCallback);
    // console.log(JSON.stringify(sections, null, 2))
    // console.log(util.inspect(sections, false, null))
  },
};

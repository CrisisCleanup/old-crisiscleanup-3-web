var parse = require('csv-parse/lib/sync');
var fs = require('fs');
var path = './test.csv';
var hurricaneHarveyFormDefinition = require('../definitions/forms/60-hurricane_harvey.json');

var data = [];
var contents = fs.readFileSync(path);
var records = parse(contents, {delimiter: ',', columns: true});

let login = function (browser) {
  let record = records[0];
  browser.page.login().navigate()
    .submitCredentials(record.email, 'ccu12345')
    .waitForElementVisible('#worker-dashboard', 5000)
    .assert.urlContains('dashboard');
};


let getAllSections =  function(fields) {
  let sections = [];

  let traverseFields = function (fields, parent={}) {
    for (const key in fields) {
      const value = fields[key];
      if (value['field_type'] === 'section') {
        sections[key] = {
          'work_type': value['if_selected_then_work_type'],
          'children': []
        };
        traverseFields(value.fields, sections[key]);
      } else if (value && value.hasOwnProperty('if_selected_then_work_type')) {
        parent.children[key] = value['if_selected_then_work_type'];
      }
    }
  };
  traverseFields(fields);
  return sections
};

module.exports = {
  '@tags': ['eventform', 'smoke'],
  'event form renders': function (browser) {
    login(browser);
    browser.page.leftaside().clickWorkerMapLink();

    let eventform = browser.page.eventform();
    eventform.expect.element('@newWorksiteBtn').to.be.visible;
    eventform.createNewWorksite();
    eventform.expect.section('@propertyInfo').to.be.visible;

    let propertyInfoSection = eventform.section.propertyInfo;
    propertyInfoSection.setValue('@name', 'John Doe');
    propertyInfoSection.expect.element('@name').value.to.equal('John Doe');

    // browser.pause()
    browser.end();
  },
  'hurricane harvey': function (browser) {
    login(browser);
    browser.page.leftaside().clickWorkerMapLink();

    browser.page.header().setEventContext(60);

    let eventform = browser.page.eventform();
    eventform.expect.element('@newWorksiteBtn').to.be.visible;
    eventform.createNewWorksite();

    const fields = hurricaneHarveyFormDefinition.phase_cleanup.fields;
    const sections = getAllSections(fields);

    for (let sectionKey in sections) {
      let section = sections[sectionKey];
      eventform.expect.element(`#ccu-section-${sectionKey}`).to.be.visible;
      for (let fieldKey in section.children) {
        if (['latitude', 'longitude'].includes(fieldKey)) {
          continue;
        }
        eventform.expect.element(`#${fieldKey}CCU`).to.be.visible;
      }
    }

  },
};

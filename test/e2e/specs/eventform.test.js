const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const path = './test.csv';
const hurricaneHarveyFormDefinition = require('../definitions/forms/60-hurricane_harvey.json');

const data = [];
const contents = fs.readFileSync(path);
const records = parse(contents, { delimiter: ',', columns: true });

const login = function (browser) {
  const record = records[0];
  browser.page.login().navigate()
    .submitCredentials(record.email, 'ccu12345')
    .waitForElementVisible('#worker-dashboard', 5000)
    .assert.urlContains('dashboard');
};


const getAllSections = function (fields) {
  const sections = [];

  const traverseFields = function (fields, parent = {}) {
    for (const key in fields) {
      const value = fields[key];
      if (value.field_type === 'section') {
        sections[key] = {
          work_type: value.if_selected_then_work_type,
          children: [],
        };
        traverseFields(value.fields, sections[key]);
      } else if (value && value.hasOwnProperty('if_selected_then_work_type')) {
        parent.children[key] = value.if_selected_then_work_type;
      }
    }
  };
  traverseFields(fields);
  return sections;
};

module.exports = {
  '@tags': ['mytag', 'smoke'],
  'event form renders': function (browser) {
    login(browser);
    browser.page.leftaside().clickWorkerMapLink();

    const eventform = browser.page.eventform();
    eventform.expect.element('@newWorksiteBtn').to.be.visible;
    eventform.createNewWorksite();
    eventform.expect.section('@propertyInfo').to.be.visible;

    const propertyInfoSection = eventform.section.propertyInfo;
    propertyInfoSection.setValue('@name', 'John Doe');
    propertyInfoSection.expect.element('@name').value.to.equal('John Doe');

    // browser.pause()
    browser.end();
  },
  'geocoder sets address properly and adds marker to map': function (browser) {
    login(browser);
    browser.page.leftaside().clickWorkerMapLink();

    browser.page.header().setEventContext(60);

    const eventform = browser.page.eventform();
    eventform.expect.element('@newWorksiteBtn').to.be.visible;
    eventform.createNewWorksite();

    const propertyInfoSection = eventform.section.propertyInfo;
    propertyInfoSection.setValue('@address', '100 Broadway NYC');
    propertyInfoSection.click('@address');
    propertyInfoSection.waitForElementVisible('@autocomplete_list', 5000);
    propertyInfoSection.expect.element('@autocomplete_list_item').to.be.visible;
    propertyInfoSection.click('@autocomplete_list_item');

    propertyInfoSection.expect.element('@address').value.to.equal('100 BROADWAY');
    propertyInfoSection.expect.element('@city').value.to.equal('NEW YORK');
    propertyInfoSection.expect.element('@county').value.to.equal('NEW YORK COUNTY');
    propertyInfoSection.expect.element('@state').value.to.equal('NY');
    propertyInfoSection.expect.element('@zip_code').value.to.equal('10005-1983');

    const map = eventform.section.map;
    map.expect.element('@marker').to.be.visible;
  },

  'hurricane harvey': function (browser) {
    login(browser);
    browser.page.leftaside().clickWorkerMapLink();

    browser.page.header().setEventContext(60);

    const eventform = browser.page.eventform();
    eventform.expect.element('@newWorksiteBtn').to.be.visible;
    eventform.createNewWorksite();

    const fields = hurricaneHarveyFormDefinition.phase_cleanup.fields;
    const sections = getAllSections(fields);

    for (const sectionKey in sections) {
      const section = sections[sectionKey];
      eventform.expect.element(`#ccu-section-${sectionKey}`).to.be.visible;
      for (const fieldKey in section.children) {
        if (['latitude', 'longitude'].includes(fieldKey)) {
          continue;
        }
        eventform.expect.element(`#${fieldKey}CCU`).to.be.visible;
      }
    }
  },
};

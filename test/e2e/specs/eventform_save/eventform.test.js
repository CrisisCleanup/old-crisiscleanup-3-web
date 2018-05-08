var hurricaneHarveyFormDefinition = require('../../definitions/forms/60-hurricane_harvey.json');
const util = require('util');
var eventform_helper = require('../eventform/eventform_helper');
let getWorksiteRecords = require('../../utils/worksite_parser').getWorksiteRecords;

let takeScreenshot = function(browser, testCaseID) {
  browser.saveScreenshot(`/home/node/testing/reports/eventform-save-${testCaseID}.png`);
};


let mainTest = function (browser, testCaseID, record) {
  eventform_helper.login(browser);
  browser.page.leftaside().clickWorkerMapLink();

  browser.page.header().setEventContext(60);

  let eventform = browser.page.eventform();
  eventform.expect.element('@newWorksiteBtn').to.be.visible;
  eventform.createNewWorksite();


  let sectionCallback = (key, value, record) => {
    // console.log('SECTION: ', key);
    // eventform.expect.element(`#ccu-section-${key}`).to.be.visible;
  };

  // populate with CSV
  const coreFields = [
    'name',
    'address'
  ];



  // required - county, latitude, longitude, phone1
  let fieldCallback = (key, value, record) => {
    // console.log('FIELD: ', key);
    if (coreFields.includes(key)) {

      eventform.expect.element(`#${key}CCU`).to.be.visible;
      if (key === 'address') {
        const completeAddress = `${record.address}, ${record.city}, ${record.state}`;
        eventform.setValue(`#${key}CCU`, completeAddress);
        browser.moveToElement(`#${key}CCU`, 10, 10, function () {
          browser.setValue(`#${key}CCU`, browser.Keys.ARROW_DOWN);
          browser.setValue(`#${key}CCU`, browser.Keys.ARROW_DOWN);
          browser.setValue(`#${key}CCU`, browser.Keys.ENTER)
          browser.setValue(`#${key}CCU`, browser.Keys.ENTER)
          browser.pause(5000);
          takeScreenshot(browser, testCaseID);
          browser.expect.element('#cityCCU').to.have.value.not.equals("");
          browser.expect.element('#countyCCU').to.have.value.not.equals("");
          browser.expect.element('#stateCCU').to.have.value.not.equals("");
          browser.expect.element('#zip_codeCCU').to.have.value.not.equals("");
        });
      } else {
        eventform.setValue(`#${key}CCU`, record[key]);

      }
    }
  };

  const fields = hurricaneHarveyFormDefinition.phase_cleanup.fields;
  eventform_helper.traverseEventDefinition(fields, record, sectionCallback, fieldCallback);
  browser.end()
  // console.log(JSON.stringify(sections, null, 2))
  // console.log(util.inspect(sections, false, null))
};

module.exports = {
  '@tags': ['proto'],
};


(function () {
  // var testCasesList = [
  //   [testCaseID, testCaseName]
  // ];
  // var records = getWorksiteRecords().slice(0,2);
  var records = getWorksiteRecords();

  function createTests(object) {
    function createFunction(testCaseID, record) {
      return function (browser) {
        mainTest(browser, testCaseID, record);
      };
    }

    for (var i = 0; i < records.length; i++) {
      // testCaseID = testCasesList[i][0];
      object[`worksite-create-test-${i}`] = createFunction(i, records[i]);
    }
  }

  createTests(module.exports);
})();

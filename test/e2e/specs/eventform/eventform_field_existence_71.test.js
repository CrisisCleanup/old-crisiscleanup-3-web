var eventform_helper = require('./eventform_helper');

module.exports = {
  '@tags': ['eventform_field_existence_71'],
  '71-ma-noreaster.json': function (browser) { eventform_helper.runTest(browser, 71); },
  '72-st_clair_etowah_al_tornadoes.json': function (browser) { eventform_helper.runTest(browser, 72); },
  // '73-april_2018_co_fires.json': function (browser) { eventform_helper.runTest(browser, 73); },
  // '74-april_2018_nc_tornadoes.json': function (browser) { eventform_helper.runTest(browser, 74); },
  // '75-kauai_flood.json': function (browser) { eventform_helper.runTest(browser, 75); },
};




var eventform_helper = require('./eventform_helper');

module.exports = {
  '@tags': ['eventform_field_existence'],
  '1-hurricane_sandy_recovery': function (browser) { eventform_helper.runTest(browser, 1); },
  '2-hattiesburg_ms_tornado': function (browser) { eventform_helper.runTest(browser, 2); },
  '3-gordon_bartow_ga_tornado.json': function (browser) { eventform_helper.runTest(browser, 3); },
  '4-moore_ok_tornado.json': function (browser) { eventform_helper.runTest(browser, 4); },
  '5-black_forest_fire_co.json': function (browser) { eventform_helper.runTest(browser, 5); },
  '6-colorado_floods.json': function (browser) { eventform_helper.runTest(browser, 6); },
  '7-midwest_tornadoes.json': function (browser) { eventform_helper.runTest(browser, 7); },
  '8-midwest_winter_floods.json': function (browser) { eventform_helper.runTest(browser, 8); },
  '9-southern_tornadoes_dec_2015.json': function (browser) { eventform_helper.runTest(browser, 9); },
  '10-northern_illinois_tornadoes.json': function (browser) { eventform_helper.runTest(browser, 10); },
};




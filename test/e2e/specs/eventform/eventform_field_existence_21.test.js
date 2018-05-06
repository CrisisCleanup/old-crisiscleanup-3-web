var eventform_helper = require('./eventform_helper');

module.exports = {
  '@tags': ['eventform_field_existence_21'],
  '21-long_island_nj_floods.json': function (browser) { eventform_helper.runTest(browser, 21); },
  '22-baxter_springs_ks.json': function (browser) { eventform_helper.runTest(browser, 22); },
  '23-columbia_ms_tornado.json': function (browser) { eventform_helper.runTest(browser, 23); },
  '24-se_michigan_floods.json': function (browser) { eventform_helper.runTest(browser, 24); },
  '25-sc_fast_track_repairs.json': function (browser) { eventform_helper.runTest(browser, 25); },
  '26-lusk_wy_flood.json': function (browser) { eventform_helper.runTest(browser, 26); },
  '27-se_tx_floods_april_2016.json': function (browser) { eventform_helper.runTest(browser, 27); },
  '28-may_2016_tx_floods.json': function (browser) { eventform_helper.runTest(browser, 28); },
  '29-ft_mcmurray_alberta_fire.json': function (browser) { eventform_helper.runTest(browser, 29); },
  '30-wv_va_june_2016_flood.json': function (browser) { eventform_helper.runTest(browser, 30); },
};




var eventform_helper = require('./eventform_helper');

module.exports = {
  '@tags': ['eventform_field_existence_31'],
  '31-nederland_cold_springs_fire.json': function (browser) { eventform_helper.runTest(browser, 31); },
  '32-mn_storms_july_2016.json': function (browser) { eventform_helper.runTest(browser, 32); },
  '33-pine_bluffs_wy_hailstorms_jul_2016.json': function (browser) { eventform_helper.runTest(browser, 33); },
  '34-wv_minor_repairs_jun_2016.json': function (browser) { eventform_helper.runTest(browser, 34); },
  '35-roaring_lion_fire.json': function (browser) { eventform_helper.runTest(browser, 35); },
  '36-south_holland_il_flood.json': function (browser) { eventform_helper.runTest(browser, 36); },
  '37-la_ms_flood_aug_2016.json': function (browser) { eventform_helper.runTest(browser, 37); },
  '38-wyoming_mi_tornado_aug_2016.json': function (browser) { eventform_helper.runTest(browser, 38); },
  '40-mn_wi_ia_flood_sep_2016.json': function (browser) { eventform_helper.runTest(browser, 40 - 1); },
};




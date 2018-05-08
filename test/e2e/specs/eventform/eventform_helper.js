let parse = require('csv-parse/lib/sync');
let fs = require('fs');
let path = './test.csv';
let contents = fs.readFileSync(path);
let records = parse(contents, {delimiter: ',', columns: true});

let login = function (browser) {
  let record = records[0];
  browser.page.login().navigate()
    .submitCredentials(record.email, 'demotest')
    .waitForElementVisible('#worker-dashboard', 2000)
    .assert.urlContains('dashboard');
};

let root = '../../definitions/forms';

let definitionPaths = {
  1: `${root}/1-hurricane_sandy_recovery.json`,
  2: `${root}/2-hattiesburg_ms_tornado.json`,
  3: `${root}/3-gordon_bartow_ga_tornado.json`,
  4: `${root}/4-moore_ok_tornado.json`,
  5: `${root}/5-black_forest_fire_co.json`,
  6: `${root}/6-colorado_floods.json`,
  7: `${root}/7-midwest_tornadoes.json`,
  8: `${root}/8-midwest_winter_floods.json`,
  9: `${root}/9-southern_tornadoes_dec_2015.json`,
  10: `${root}/10-northern_illinois_tornadoes.json`,
  11: `${root}/11-nj_coastal_floods_jan_2016.json`,
  12: `${root}/12-eastcoast_snowstorms.json`,
  13: `${root}/13-oct_2015_east_coast_floods.json`,
  14: `${root}/14-ms_al_tornadoes_feb_2016.json`,
  15: `${root}/15-la_ms_tx_flooding_march_2016.json`,
  16: `${root}/16-oct_2015_tx_floods.json`,
  17: `${root}/17-va_tornadoes.json`,
  18: `${root}/18-louisville_ms_torndao.json`,
  19: `${root}/19-texas_oklahoma_floods.json`,
  20: `${root}/20-flint_michigan_water_crisis.json`,
  21: `${root}/21-long_island_nj_floods.json`,
  22: `${root}/22-baxter_springs_ks.json`,
  23: `${root}/23-columbia_ms_tornado.json`,
  24: `${root}/24-se_michigan_floods.json`,
  25: `${root}/25-sc_fast_track_repairs.json`,
  26: `${root}/26-lusk_wy_flood.json`,
  27: `${root}/27-se_tx_floods_april_2016.json`,
  28: `${root}/28-may_2016_tx_floods.json`,
  29: `${root}/29-ft_mcmurray_alberta_fire.json`,
  30: `${root}/30-wv_va_june_2016_flood.json`,
  31: `${root}/31-nederland_cold_springs_fire.json`,
  32: `${root}/32-mn_storms_july_2016.json`,
  33: `${root}/33-pine_bluffs_wy_hailstorms_jul_2016.json`,
  34: `${root}/34-wv_minor_repairs_jun_2016.json`,
  35: `${root}/35-roaring_lion_fire.json`,
  36: `${root}/36-south_holland_il_flood.json`,
  37: `${root}/37-la_ms_flood_aug_2016.json`,
  38: `${root}/38-wyoming_mi_tornado_aug_2016.json`,
  40: `${root}/40-mn_wi_ia_flood_sep_2016.json`,
  41: `${root}/41-hurricane_matthew_all_states.json`,
  42: `${root}/42-hurricane_hermine.json`,
  43: `${root}/43-gatlinburg_tn_fire.json`,
  44: `${root}/44-so_co_winds.json`,
  45: `${root}/45-hattiesburg_petal_tornado.json`,
  46: `${root}/46-s_ga_tornadoes_jan_2017.json`,
  47: `${root}/47-new_orleans_tornadoes_feb_2017.json`,
  48: `${root}/48-san_antonio_tx_tornadoes.json`,
  49: `${root}/49-il_tornadoes_feb_2017.json`,
  50: `${root}/50-eastern_mo_tornadoes_mar_2017.json`,
  51: `${root}/51-virginia_beach_tornado_mar_2017.json`,
  52: `${root}/52-east_texas_tornadoes_april_2017.json`,
  53: `${root}/53-mo_flooding_may_2017.json`,
  54: `${root}/54-troy_se_mi_floods_2017.json`,
  55: `${root}/55-holmes_county_ms_tornadoes_may_2017.json`,
  56: `${root}/56-nw_wi_tornado_may_2017.json`,
  57: `${root}/57-mid_mi_floods_june_2017.json`,
  58: `${root}/58-illinois_wisconsin_floods_jul_2017.json`,
  59: `${root}/59-west_virginia_flood_jul_2017.json`,
  60: `${root}/60-hurricane_harvey.json`,
  61: `${root}/61-hurricane_irma.json`,
  62: `${root}/62-hurricane_nate.json`,
  63: `${root}/63-hudson_cedar_rock_nc_tornado.json`,
  64: `${root}/64-terremotos_de_m├⌐xico_septiembre_2017.json`,
  65: `${root}/65-northern_california_fires.json`,
  66: `${root}/66-hurricane_maria.json`,
  67: `${root}/67-bowie_county_tx_tornado.json`,
  68: `${root}/68-montecito_mudslides.json`,
  69: `${root}/69-mi_il_in_floods_feb_2018.json`,
  70: `${root}/70-wv_floods_feb_2018.json`,
  71: `${root}/71-ma-noreaster.json`,
  72: `${root}/72-st_clair_etowah_al_tornadoes.json`,
  73: `${root}/73-april_2018_co_fires.json`,
  74: `${root}/74-april_2018_nc_tornadoes.json`,
  75: `${root}/75-kauai_flood.json`
};

let getAllSections = function (fields) {
  let sections = [];

  let traverseFields = function (fields, parent = {}) {
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


let runTest = function (browser, i) {

  console.log(`EXECUTING: `, definitionPaths[i]);
  let formDefinition = require(definitionPaths[i]);
  login(browser);
  browser.page.leftaside().clickWorkerMapLink();
  browser.page.header().setEventContext(i);

  let eventform = browser.page.eventform();
  eventform.expect.element('@newWorksiteBtn').to.be.visible;
  eventform.createNewWorksite();

  // browser.pause(20000);

  let sectionCallback = (key, value) => {
    eventform.expect.element(`#ccu-section-${key}`).to.be.visible;
  };

  let fieldCallback = (key, value) => {
    if (!['latitude', 'longitude'].includes(key)) {
      eventform.expect.element(`#${key}CCU`).to.be.visible;
    }
  };

  const fields = formDefinition.phase_cleanup.fields;
  traverseEventDefinitionWithouRecord(fields, sectionCallback, fieldCallback);

  // browser.page.header().click('@logoutBtn');
  browser.end()
};

let traverseEventDefinitionWithouRecord =  function(fields, sectionCallback=() => {}, fieldCallback=() => {}) {
  let sections = {};

  let traverseFields = function (fields, parent={}) {
    for (const key in fields) {
      const value = fields[key];
      if (value['field_type'] === 'section') {
        sectionCallback(key, value);
        traverseFields(value.fields, sections[key]);
      } else if (value && value.hasOwnProperty('if_selected_then_work_type')) {
        fieldCallback(key, value);
      }
    }
  };
  traverseFields(fields);
  return sections
};

let traverseEventDefinition =  function(fields, record, sectionCallback=() => {}, fieldCallback=() => {}) {
  let sections = {};

  let traverseFields = function (fields, parent={}) {
    for (const key in fields) {
      const value = fields[key];
      if (value['field_type'] === 'section') {
        sectionCallback(key, value, record);
        traverseFields(value.fields, sections[key]);
      } else if (value && value.hasOwnProperty('if_selected_then_work_type')) {
        fieldCallback(key, value, record);
      }
    }
  };
  traverseFields(fields);
  return sections
};

module.exports = {
  login: login,
  definitionPaths: definitionPaths,
  getAllSections: getAllSections,
  traverseEventDefinition: traverseEventDefinition,
  runTest: runTest
};

var eventform_helper = require('./eventform_helper');

module.exports = {
  '@tags': ['eventform_quick'],
  '1-hurricane_sandy_recovery': function (browser) { eventform_helper.runTest(browser, 1); },
  '2-hattiesburg_ms_tornado': function (browser) { eventform_helper.runTest(browser, 2); }
};




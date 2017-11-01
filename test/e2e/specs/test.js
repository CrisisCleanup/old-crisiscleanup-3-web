// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('.app-header')
      .end();
  },
  'registration': function test(browser) {
    const devServer = `${browser.globals.devServerURL}/#/register`;

    browser
      .url(devServer)
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('.app-header')
      .setValue('input[placeholder=Email]', 'test25@example.com')
      .setValue('input[placeholder=Name]', 'Random Name')
      .end();
  },
};

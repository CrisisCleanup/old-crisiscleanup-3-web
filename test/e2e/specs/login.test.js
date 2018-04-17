var parse = require('csv-parse/lib/sync');
var fs = require('fs');
var path = './test.csv';

var data = [];
var contents = fs.readFileSync(path);
var records = parse(contents, {delimiter: ',', columns: true});

module.exports = {
  '@tags': ['login'],
  'login': function (browser) {
    var login = browser.page.login();

    login.navigate()
      .assert.visible('@email')
      .assert.visible('@password')

    browser.end();
  },
  'login with creds': function (browser) {
    var login = browser.page.login();

    records.forEach(function (record) {

      login.navigate()
        .assert.visible('@email')
        .assert.visible('@password')
        .setValue('@email', record.email)
        .setValue('@password', 'demotest')
        .click('@submit')
        .waitForElementVisible('#worker-dashboard', 2000)
        .assert.containsText('span.d-md-down-none', record.name.trim())
        .assert.urlContains('dashboard');
    });

    browser.end();
  }
};

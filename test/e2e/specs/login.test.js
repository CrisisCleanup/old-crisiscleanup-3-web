var parse = require('csv-parse/lib/sync');
var fs = require('fs');
var path = './test.csv';

var data = [];
var contents = fs.readFileSync(path);
var records = parse(contents, {delimiter: ',', columns: true});
var WAITTIME = 5000;

module.exports = {
  '@tags': ['login', 'smoke'],
  'login': function (browser) {
    var login = browser.page.login();

    login.navigate()
      .assert.visible('@email')
      .assert.visible('@password')

    browser.end();
  },
  'login with creds': function (browser) {
    var login = browser.page.login();

    let record = records[0];

    login.navigate()
      .submitCredentials(record.email, 'ccu12345')
      .waitForElementVisible('#worker-dashboard', WAITTIME)
      .assert.containsText('span.d-md-down-none', record.name.trim())
      .assert.urlContains('dashboard');

    browser.end();
  },
  'login with creds with enter button': function (browser) {
    var login = browser.page.login();

    let record = records[0];

    login.navigate()
      .submitCredentialsWithEnterBtn(record.email, 'ccu12345')
      .waitForElementVisible('#worker-dashboard', WAITTIME)
      .assert.containsText('span.d-md-down-none', record.name.trim())
      .assert.urlContains('dashboard');

    browser.end();
  },
  'login with creds non-admin user': function (browser) {
    var login = browser.page.login();

    let record = records[1];

    login.navigate()
      .submitCredentials(record.email, 'demotest')
      .waitForElementVisible('#worker-dashboard', WAITTIME)
      .assert.containsText('span.d-md-down-none', record.name.trim())
      .assert.urlContains('dashboard');

    // browser.pause(60000);
    browser.end();
  },
  /*
  'login with bad credentials': function (browser) {
    var login = browser.page.login();

    login.navigate()
      .submitCredentials("random3920392@example.com", 'wrongpassword')
      .assert.containsText('div.card-body', 'Invalid email or password')
      .assert.urlContains('login');

    browser.end();
  },
  'login with bad credentials and then correct': function (browser) {
    var login = browser.page.login();

    let record = records[1];

    login.navigate()
      .submitCredentials("random3920392@example.com", 'wrongpassword')
      .assert.containsText('div.card-body', 'Invalid email or password')
      .assert.urlContains('login')
      .clearFields()
      .submitCredentials(record.email, 'demotest')
      .waitForElementVisible('#worker-dashboard', WAITTIME)
      .assert.containsText('span.d-md-down-none', record.name.trim())
      .assert.urlContains('dashboard');

    browser.end();
  },
  */
  'go to login': function (browser) {
    let homePage = browser.page.home();
    homePage.navigate();
    homePage.goToLogin();
    browser.assert.urlContains('login');
    browser.end();
  },
  'login with bad credentials and then navigate away and return - errors should be cleared on mount': function (browser) {
    let login = browser.page.login();

    login.navigate()
      .submitCredentials("random3920393@example.com", 'wrongpassword')
      .waitForElementVisible('div.card-body', WAITTIME)
      .assert.containsText('div.card-body', 'Invalid email or password')
      .assert.urlContains('login');

    let homePage = browser.page.home();
    homePage.goToHome();
    // Waiting for notification to go away
    browser.assert.visible('.vue-notification');
    browser.pause(5000);
    homePage.goToLogin();
    login.assert.urlContains('login');
    login.expect.element('div.card-body').text.to.not.contain('Invalid');

    browser.end();
  }
};

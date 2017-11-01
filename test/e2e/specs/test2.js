module.exports = {
  '@tags': ['login'],
  'Test login': function (client) {
    var login = client.page.login();

    login.navigate()
      .assert.visible('@email')
      .setValue('@email', '')
      .setValue('@password', '')
      .click('@submit')
      .waitForElementVisible('#worker-dashboard', 2000)
      .assert.elementPresent('#worker-dashboard')
      .assert.urlContains('dashboard');

    client.end();
  }
};

//"http://localhost:8025/api/v2/messages"

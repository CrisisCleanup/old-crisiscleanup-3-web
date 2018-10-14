module.exports = {
  '@tags': ['home', 'smoke'],
  'basic home visibility test': function (browser) {
    let homePage = browser.page.home();
    homePage.navigate();
    homePage.expect.section('@header').to.be.visible;

    let headerSection = homePage.section.header;
    headerSection.expect.element('@realtimeMapLink').to.be.visible;
    headerSection.expect.element('@donateLink').to.be.visible;
    headerSection.expect.element('@loginLink').to.be.visible;
    browser.end();
  },
  'go to login page': function (browser) {
    let homePage = browser.page.home();
    homePage.navigate();
    homePage.expect.section('@header').to.be.visible;
    let headerSection = homePage.section.header;
    headerSection.expect.element('@loginLink').to.be.visible;
    headerSection.click('@loginLink');
    browser.assert.urlContains('login');
    browser.end();
  }
};

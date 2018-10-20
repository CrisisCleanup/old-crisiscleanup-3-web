module.exports = {
  '@tags': ['realtime_map'],
  'Realtime Map is link is visible': function (browser) {
    let homePage = browser.page.home();
    homePage.navigate();
    homePage.expect.section('@header').to.be.visible;

    let headerSection = homePage.section.header;
    headerSection.expect.element('@realtimeMapLink').to.be.visible;
    browser.end();
  },
  'Realtime Map shows up with pitneybowes attribution': function (browser) {
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

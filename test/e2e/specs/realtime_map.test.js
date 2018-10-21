module.exports = {
  '@tags': ['realtime_map'],
  'Realtime Map is link is visible': (browser) => {
    const homePage = browser.page.home();
    homePage.navigate();
    homePage.expect.section('@header').to.be.visible;

    const headerSection = homePage.section.header;
    headerSection.expect.element('@realtimeMapLink').to.be.visible;
    browser.end();
  },
  'Realtime Map shows up with pitneybowes attribution': (browser) => {
    const homePage = browser.page.home();
    homePage.navigate();
    homePage.expect.section('@header').to.be.visible;
    homePage.expect.element('@attribution').to.be.visible;
    browser.end();
  },
};

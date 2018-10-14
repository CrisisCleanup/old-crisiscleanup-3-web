var commands = {
  clickDashboardLink: function () {
    return this.waitForElementVisible('@dashboardLink', 5000)
      .click('@dashboardLink')
  },
  clickWorkerMapLink: function () {
    return this.waitForElementVisible('@workerMapLink', 5000)
      .click('@workerMapLink')
  },
};

module.exports = {
  commands: [commands],
  elements: {
    dashboardLink: {
      selector: "a[href='/worker/dashboard']"
    },
    workerMapLink: {
      selector: "a[href='/worker/map']"
    },
    workerWorksitesLink: {
      selector: "a[href='/worker/worksites']"
    },
    browseWorksitesLink: {
      selector: "a[href='/worker/browse']"
    },
    myOrganizationLink: {
      selector: "a[href='/worker/my-organization']"
    },
    contactsLink: {
      selector: "a[href='/worker/contacts']"
    },
  },

};

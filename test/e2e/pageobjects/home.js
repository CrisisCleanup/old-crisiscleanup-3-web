const commands = {
  goToHome() {
    return this.waitForElementVisible('@logo', 5000)
      .click('@logo');
  },
  goToLogin() {
    return this.section.header.click('@loginLink');
  },
};

module.exports = {
  url() {
    return this.api.launch_url;
  },
  commands: [commands],
  elements: {
    logo: {
      selector: '.navbar-brand',
    },
    attribution: {
      selector: '.leaflet-attribution',
    },
  },
  sections: {
    header: {
      selector: '.app-header',
      elements: {
        logo: {
          selector: '.navbar-brand',
        },
        attribution: {
          selector: '.leaflet-attribution',
        },
        realtimeMapLink: {
          selector: "a[href='/map']",
        },
        donateLink: {
          selector: "a[href='/map#go-donate']",
        },
        poweredByLink: {
          selector: "a[href='/map#go-poweredby']",
        },
        whoweserveLink: {
          selector: "a[href='/map#go-whoweserve']",
        },
        registerOrganizationLink: {
          selector: "a[href='/register']",
        },
        loginLink: {
          selector: "a[href='/login']",
        },
      },
    },
  },
};

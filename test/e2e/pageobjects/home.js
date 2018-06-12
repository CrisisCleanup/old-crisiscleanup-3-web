var commands = {
  goToHome: function() {
    return this.waitForElementVisible('@logo', 5000)
      .click('@logo')
  },
  goToLogin: function() {
    return this.section.header.click('@loginLink')
  },
};

module.exports = {
  url: function() {
    return this.api.launch_url;
  },
  commands: [commands],
  elements: {
    logo: {
      selector: '.navbar-brand'
    },
  },
  sections: {
    header: {
      selector: '.app-header',
      elements: {
        logo: {
          selector: '.navbar-brand'
        },
        realtimeMapLink: {
          selector: "a[href='/map']"
        },
        donateLink: {
          selector: "a[href='/map#go-donate']"
        },
        poweredByLink: {
          selector: "a[href='/map#go-poweredby']"
        },
        whoweserveLink: {
          selector: "a[href='/map#go-whoweserve']"
        },
        registerOrganizationLink: {
          selector: "a[href='/register']"
        },
        loginLink: {
          selector: "a[href='/login']"
        }
      }
    }
  }
};

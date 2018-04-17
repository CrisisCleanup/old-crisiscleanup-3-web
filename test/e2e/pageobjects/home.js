
module.exports = {
  url: function() {
    return this.api.launch_url;
  },
  sections: {
    header: {
      selector: '.app-header',
      elements: {
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
          selector: "a[href='/register-organization']"
        },
        loginLink: {
          selector: "a[href='/login']"
        }
      }
    }
  }
};

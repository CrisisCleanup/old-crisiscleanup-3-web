var WAITTIME = 5000;

var commands = {
  submitCredentials: function(email, password) {
    // this.api.pause(5000);
    return this.waitForElementVisible('@email', WAITTIME)
      .assert.visible('@email')
      .assert.visible('@password')
      .setValue('@email', email)
      .setValue('@password', password)
      .click('@submit')
  },
  submitCredentialsWithEnterBtn: function(email, password) {
    // this.api.pause(5000);
    return this.waitForElementVisible('@email', WAITTIME)
      .assert.visible('@email')
      .assert.visible('@password')
      .setValue('@email', email)
      .setValue('@password', [password, this.api.Keys.ENTER])
  },
  clearFields: function() {
    return this.waitForElementVisible('@email', WAITTIME)
      .clearValue('@email')
      .clearValue('@password')
  }
};

module.exports = {
  url: function() {
    return this.api.launch_url + '/login';
  },
  commands: [commands],
  elements: {
    event: {
      selector: '#ccu-regorg-event'
    },
    primaryFirstName: {
      selector: '#ccu-regorg-primary-first-name'
    },
    primaryLastName: {
      selector: '#ccu-regorg-primary-last-name'
    },
    primaryEmail: {
      selector: '#login-regorg-primary-email'
    },
    primaryCellPhoneNumber: {
      selector: '#ccu-regorg-primary-cell-phone-number'
    },
    organizationName: {
      selector: '#ccu-regorg-organization-name'
    },
    organizationAddress: {
      selector: '#ccu-regorg-organization-address'
    },
    organizationState: {
      selector: '#login-regorg-organization-state'
    },
    organizationReferral: {
      selector: '#login-regorg-organization-referral'
    },
    organizationFacebook: {
      selector: '#login-regorg-organization-facebook'
    },
    organizationEmail: {
      selector: '#login-regorg-organization-email'
    },
    organizationCity: {
      selector: '#login-regorg-organization-city'
    },
    organizationZipCode: {
      selector: '#login-regorg-organization-zip-code'
    },
    organizationWebsite: {
      selector: '#login-regorg-organization-website'
    },
    organizationTwitter: {
      selector: '#login-regorg-organization-twitter'
    },
  }
};

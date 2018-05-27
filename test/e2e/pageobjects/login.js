var WAITTIME = 5000;

var commands = {
  submitCredentials: function(email, password) {
    // this.api.pause(1000);
    return this.waitForElementVisible('@email', WAITTIME)
      .assert.visible('@email')
      .assert.visible('@password')
      .setValue('@email', email)
      .setValue('@password', password)
      .click('@submit')
  },
  submitCredentialsWithEnterBtn: function(email, password) {
    // this.api.pause(1000);
    return this.waitForElementVisible('@email', WAITTIME)
      .assert.visible('@email')
      .assert.visible('@password')
      .setValue('@email', email)
      .setValue('@password', password)
      .setValue(`@submit`, this.api.Keys.ENTER)
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
    email: {
      selector: '#login-email'
    },
    password: {
      selector: '#login-password'
    },
    submit: {
      selector: '#login-submit-btn',
    }
  }
};

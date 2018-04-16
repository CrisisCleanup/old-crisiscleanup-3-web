
module.exports = {
  url: function() {
    return this.api.launch_url + '/login';
  },
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

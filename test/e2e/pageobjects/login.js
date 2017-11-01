
module.exports = {
  url: 'http://localhost:8080/#/login',
  // url: function() {
  //   return this.api.launchUrl + '/#/login';
  // },
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

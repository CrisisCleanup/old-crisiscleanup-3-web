
module.exports = {
  // url: 'http://localhost:8080/#/worker/dashboard',
  url: function() {
    return this.api.launchUrl + '/#/worker/dashboard';
  },
  elements: {
    dashboard: {

    },
    emailInvites: {
      selector: '#emails-to-end'
    },
    submitInvites: {
      selector: '#submit-invites-btn',
    }
  }
};

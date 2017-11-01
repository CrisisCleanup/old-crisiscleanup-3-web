
module.exports = {
  url: 'http://localhost:8080/#/register',
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submit: {
      selector: '//[@name="q"]',
      locateStrategy: 'xpath'
    }
  }
};


module.exports = {
  url: 'http://google.com',
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

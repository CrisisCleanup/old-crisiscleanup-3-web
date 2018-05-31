var merge = require('webpack-merge');
var prodEnv = require('../production/prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"https://staging-api.crisiscleanup.services"'
});

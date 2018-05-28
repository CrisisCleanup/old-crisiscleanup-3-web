var merge = require('webpack-merge')
var devEnv = require('./development/dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_ENDPOINT: '"https://api.staging.crisiscleanup.services"'
});

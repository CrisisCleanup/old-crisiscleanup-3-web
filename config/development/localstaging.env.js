var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"https://staging-api.crisiscleanup.services"'
});

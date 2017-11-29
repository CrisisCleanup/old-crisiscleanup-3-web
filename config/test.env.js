var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  GOOGLE_MAPS_API_KEY: '"AIzaSyAS7GowniFU4IZMZUEw0rVPyzY1EcWGXNU"',
  API_ENDPOINT: '"https://api.staging.crisiscleanup.services"'
});

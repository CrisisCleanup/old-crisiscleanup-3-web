var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_MAPS_API_KEY: '"AIzaSyAS7GowniFU4IZMZUEw0rVPyzY1EcWGXNU"',
  API_ENDPOINT: '"https://crisiscleanup3.herokuapp.com"'
});

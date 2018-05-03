var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_MAPS_API_KEY: '"AIzaSyAS7GowniFU4IZMZUEw0rVPyzY1EcWGXNU"',
  API_ENDPOINT: '"https://api.staging.crisiscleanup.services"',
  API_PHONE_ENDPOINT: '"http://localhost:8020"'  
});

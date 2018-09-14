var merge = require('webpack-merge');
var prodEnv = require('../production/prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LEAFLET_MAP_APP_ID: '"OxegEAQ46ansqN9LtNd1"',
  LEAFLET_MAP_APP_CODE: '"86XV8M-pIbpy5TUa9H_Aww"',
  API_ENDPOINT: '"https://dev-api.crisiscleanup.services"'
});

var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"development"',
  GOOGLE_MAPS_API_KEY: '"AIzaSyBDNpGYs-7kUfF4Z7sgEEYLdw6LepHH1uU"',
  API_ENDPOINT: '"http://localhost:5000"'
});

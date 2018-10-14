// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')


console.log("ENV: ", process.env.APP_ENV);

var env = null;
switch(process.env.APP_ENV) {
  case 'functional':
    env = require('./production/functional.env');
    break;
  case 'functionalci':
    env = require('./production/functionalci.env');
    break;
  case 'local':
    env = require('./development/local.env');
    break;
  case 'localstaging':
    env = require('./development/local.env');
    break;
  case 'realdev':
    env = require('./production/realdev.env');
    break;
  case 'realprod':
    env = require('./production/realprod.env');
    break;
  case 'realstaging':
    env = require('./production/realstaging.env');
    break;
  case 'base':
    env = require('./production/base.env');
    break;
}

console.log("ENV: ", env);

module.exports = {
  build: {
    env: (env !== null) ? env : require('./production/base.env'),
    index: path.resolve(__dirname, `../dist/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist`),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env:  (env !== null) ? env : require('./development/dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

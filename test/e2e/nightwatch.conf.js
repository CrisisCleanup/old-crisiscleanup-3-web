
// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['specs'],
  page_objects_path: ['pageobjects'],
  output_folder: 'reports',
  custom_assertions_path: ['custom-assertions'],

  test_settings: {
    default: {
      globals: {
        devServerURL: 'http://webapp',
      },
      launch_url: "http://webapp",
      end_session_on_fail: true,
      skip_testcases_on_fail: false,
      "screenshots" : {
        "enabled" : true,
        "path" : "/home/node/testing/reports/errors_screenshots",
        "on_failure" : true,
        "on_error" : false
      },
      selenium_host: "chromedriver"
    },
    jenkins: {
      globals: {
        devServerURL: 'http://localhost',
      },
      launch_url: "http://localhost",
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
      "screenshots" : {
        "enabled" : true,
        "path" : "/home/node/reports/errors_screenshots",
        "on_failure" : true,
        "on_error" : false
      },
      selenium_host: "localhost"
    },
    grid: {
      globals: {
        devServerURL: 'http://webapp'
      },
      launch_url: "http://webapp",
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
      selenium_host: "hub",
      selenium_port: 4444,
      "desiredCapabilities": {
        "browserName": "chrome"
      },
    },

  }
}

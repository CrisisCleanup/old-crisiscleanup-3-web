
// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['specs'],
  page_objects_path: ['pageobjects'],
  output_folder: 'reports',
  custom_assertions_path: ['custom-assertions'],

  test_settings: {
    default: {
      globals: {
        devServerURL: 'http://webapp'
      },
      launch_url: "http://webapp",
      selenium_host: "chromedriver"
    },
    grid: {
      globals: {
        devServerURL: 'http://webapp'
      },
      launch_url: "http://webapp",
      selenium_host: "hub",
      selenium_port: 4444,
      "desiredCapabilities": {
        "browserName": "chrome"
      },
    },

  }
}

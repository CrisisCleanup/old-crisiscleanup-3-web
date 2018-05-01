
// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['specs'],
  page_objects_path: ['pageobjects'],
  output_folder: 'reports',
  custom_assertions_path: ['custom-assertions'],

  test_settings: {
    default: {
      globals: {
        devServerURL: 'http://webapp' //+ (process.env.PORT || config.dev.port)
      },
      launch_url: "http://webapp",
      selenium_host: "chromedriver"
    },

  }
}

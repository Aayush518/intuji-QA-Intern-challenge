const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
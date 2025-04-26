const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 180000,
    requestTimeout: 30000,
    responseTimeout: 60000,
    screenshotOnRunFailure: true,
    numTestsKeptInMemory: 10,
    retries: {
      runMode: 3,
      openMode: 2
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
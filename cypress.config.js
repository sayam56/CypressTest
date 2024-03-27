const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // to keep cypress from auto rerunning the test after each change in file
  watchForFileChanges:false ,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
});

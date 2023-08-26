/* eslint-disable @typescript-eslint/no-var-requires*/
import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  screenshotsFolder: "images",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.ts",
    baseUrl: "https://www.google.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on, config);
    },
  },
});

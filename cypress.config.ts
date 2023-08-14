/* eslint-disable global-require, @typescript-eslint/no-var-requires */

import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    specPattern: "cypress/e2e/**/*.ts",
    baseUrl: "https://www.google.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on, config);
    },
  },
});

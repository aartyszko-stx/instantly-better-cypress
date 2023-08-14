import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.ts",
    baseUrl: "https://www.google.com",
  },
});

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
import { defineConfig, devices } from "@playwright/test";

process.env.PETSTORE_BASE_URL = "https://petstore.swagger.io/v2";
export default defineConfig({
  testDir: "./tests",
  timeout: 30000,

  reporter: [["list"], ["html"], ["allure-playwright"]],

  use: {
    baseURL: "https://demowebshop.tricentis.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

const { devices } = require("@playwright/test");

const config = {
  testDir: "../tests/",
  timeout: 360 * 1000,
  retries: 2,
  expect: {
    timeout: 50000
  },
  reporter: [["list"],
  ["html", { outputFolder: "../html-report", open: "never" }],
  ["allure-playwright"],
  ['junit', { outputFile: 'results.xml' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 0,
    trace: "on-first-retry",
    timeout: 360 * 1000,
    headless: true,
    isMobile: false,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  projects: [
    {
      name: "Chrome",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"] }
    },
    {
      name: "Safari",
      use: { ...devices["Desktop Safari"] }
    },
    {
      name: "Edge",
      use: { ...devices["Desktop Edge"] },
      channel: "msedge"
    }
  ]
};

module.exports = config;

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: "./tests/SIT",
  /* Maximum time one test can run for. */
  timeout: 360 * 1000,
  expect: {
    timeout: 90000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], 
  ["html", { outputFolder: "html-report", open: "never" }], 
  ["allure-playwright"], 
  ['junit', { outputFile: 'results.xml' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 0,
    trace: "on-first-retry",
    isMobile: false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Test_Automation",
      testDir: "tests/",
      timeout: 360 * 1000,
      retries: 3,
      use: {
        browserName: "chromium",
        //channel: "msedge",
        headless: false,           
        isMobile: false,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure"
      }
    }  
  ]
};

module.exports = config;

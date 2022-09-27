const { devices } = require("@playwright/test");

const config = {
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
        headless: false,
        isMobile: true,
        ignoreHTTPSErrors: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure"
    },
    projects: [
        // "Galaxy S10" tests use Chromium browser.
        {
            name: 'Galaxy_S10',
            testDir: "../tests",
            timeout: 360 * 1000,
            use: {
                browserName: 'chromium',
                viewport: { width: 360, height: 760 }
            },
        },
        // "iPhone 11" tests use WebKit browser.
        {
            name: 'iPhone11',
            testDir: "../tests/",
            timeout: 360 * 1000,
            use: {
                browserName: 'webkit',
                ...devices['iPhone 11'],
            },
        },
        // "iPad Pro 11" tests use Chromium browser.
        {
            name: 'iPad_Pro_11',
            testDir: "../tests/",
            timeout: 360 * 1000,
            use: {
                browserName: 'webkit',
                ...devices['iPad Pro 11']
            },
        }
    ]
};

module.exports = config;

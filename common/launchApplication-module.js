/**
 * Launch the application for url provided
 * @param {Page} page 
 * @param {String} url 
 */
const launchApplication = async (page, url) => {
    await page.goto(url, {
        waitUntil: "load",
        // Remove the timeout
        timeout: 0
    });
};

module.exports = launchApplication;
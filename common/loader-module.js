const { TIMEOUT } = require("../constants/Timeouts");

//Loader
const loader = "xpath=//*[@class='overlay']";
const loader2 = "xpath=//*[@class='loader']";

/**
 * Module to wait for loader to disappear if loader is displayed
 * @param {Page} page 
 */
const waitForLoaderToDisappear = async (page) => {
    if (await page.isVisible(loader)) {
        await page.waitForSelector(loader, { state: "hidden", timeout: TIMEOUT.HIGHER * 2 });
        return;
    }

    if (await page.isVisible(loader2))
        await page.waitForSelector(loader2, { state: "hidden", timeout: TIMEOUT.HIGHER * 2 });
};

module.exports = waitForLoaderToDisappear;
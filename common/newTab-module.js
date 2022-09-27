const { expect } = require("@playwright/test");

/**
 * Click on link text which opens link in new tab and return the new page object
 * @param {Page} page 
 * @param {Context} context 
 * @param {Locator} linkText 
 */
const clickAndOpenLinkInNewTab = async (page, context, linkText) => {

    let totalWindows = context.pages();

    const [popup] = await Promise.all([

        page.waitForEvent('popup'),

        page.locator(linkText).click(),
    ]);

    await popup.waitForLoadState();
    console.log(await popup.title());

    let totalWindows2 = context.pages();

    expect(totalWindows.length).toBe(totalWindows2.length - 1);

    return totalWindows2[totalWindows2.length - 1];
}

module.exports = clickAndOpenLinkInNewTab;
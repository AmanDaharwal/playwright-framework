const { expect } = require("@playwright/test");

const sucessCode = 200;

/**
 * Verify the after click on view document button, document is opened in new tab or not. This module also close the document page after verification.
 * @param {Page} page 
 * @param {Context} context 
 * @param {Locator} btnView 
 */
const verifyDocumentOpenedInNewWindow = async (page, context, btnView) => {

    let totalWindows = context.pages();

    const [popup] = await Promise.all([

        page.waitForEvent('popup'),

        page.locator(btnView).click(),
    ]);

    await popup.waitForLoadState();
    console.log(await popup.title());

    let totalWindows2 = context.pages();

    expect(totalWindows.length).toBe(totalWindows2.length - 1);

    let newPage = totalWindows2[totalWindows2.length - 1];
    let documentURL = await newPage.url();
    console.log(documentURL);

    const [_, response] = await Promise.all([
        newPage.goto(documentURL, {
            waitUntil: 'networkidle',

            timeout: 0
        }),
        newPage.waitForEvent("response", response => response.request().resourceType() === "document")
    ]);
    console.log("Status code is", response.status());
    expect(response.status()).toBe(sucessCode);

    newPage.close();
}

module.exports = verifyDocumentOpenedInNewWindow;
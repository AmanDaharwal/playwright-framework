/**
 * Returns true if locator is a email link else false
 * @param {Page} page 
 * @param {Locator} emailLocator
 * @param {String} email ex: sam@mail.com
 */
const isEmailLink = async (page, emailLocator, email) => {
    
    const locator = await page.locator(emailLocator);
    let href = await locator.getAttribute("href");

    if(href === "mailto:"+email.trim())
        return true;

    return false;
};

module.exports = isEmailLink;
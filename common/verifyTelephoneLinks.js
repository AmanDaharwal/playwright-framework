/**
 * Returns true if locator is a telephone link else false
 * @param {Page} page 
 * @param {Locator} telephoneLocator
 * @param {String} telephone ex: 01928839
 */
const isTelephoneLink = async (page, telephoneLocator, telephone) => {
    
    const locator = await page.locator(telephoneLocator);
    let href = await locator.getAttribute("href");

    if(href === "tel:"+telephone.trim())
        return true;
    else if(href === "tel: "+telephone.trim())
        return true;

    return false;
};

module.exports = isTelephoneLink;
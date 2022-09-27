/**
 * Verify the maximum number of character allowed in textbox by typing the character. Return true if parameter limit matches with actual limit
 * @param {Page} page 
 * @param {String} textboxLocator 
 * @param {Integer} limit 
 */
const verifyMaximumCharacterLimitOfTextbox = async (page, textboxLocator, limit) => {
    await page.type(textboxLocator, Array(limit + 20).join('x'));
    let actualLimit = (await page.$eval(textboxLocator, el => el.value)).length;

    console.log("Actual limit of textbox is ", actualLimit);

    if (limit === actualLimit) {
      return true;
    }
    return false;
};

module.exports = verifyMaximumCharacterLimitOfTextbox;
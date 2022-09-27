/**
 * Note: Below modules are for NG-SELECT library, for normal select user playwright select apis
 * Select ng-select dropdown by visible text option
 * @param {WebElement} sddLocator 
 * @param {String} option 
 */
const selectOptionInDropdown = async (page, sddLocator, option) => {

    console.log("Select option - ", option, " in dropdown");
    if (sddLocator === undefined || sddLocator === null)
        throw new Error("Dropdown locator is " + sddLocator);
    if (option === undefined || option === null)
        throw new Error("Option is " + option);

    await page.click(sddLocator);

    let optionToSelect = "xpath=//*[@role='option']//*[contains(text(),'" + option + "')]";
    console.log("xpath of dropdown option is" + optionToSelect);

    let txtDropdownInput = sddLocator + "//input";
    if (await page.isEditable(txtDropdownInput)) {
        if (!await page.isVisible(optionToSelect))
            await page.fill(txtDropdownInput, option);
    }

    await page.waitForSelector(optionToSelect);

    await page.click(optionToSelect);
}

/**
 * Select multi option select ng-select dropdown by visible text option
 * @param {WebElement} sddLocator 
 * @param {Array} listOfOptions 
 * @param {Boolean} selectAll
 */
const selectMultipleOptionsInDropdown = async (page, sddLocator, listOfOptions, selectAll = false) => {

    if (sddLocator === undefined || sddLocator === null)
        throw new Error("Dropdown locator is " + sddLocator);

    await page.click(sddLocator);

    if (selectAll) {
        if (!await page.isVisible(sddLocator + "//*[contains(@class,'all-selected')]"))
            await page.click(sddLocator + "//*[contains(@class,'selectall')]");

        await page.click(sddLocator);
        return;
    }

    if (listOfOptions === undefined || listOfOptions === null || listOfOptions.length === 0)
        throw new Error("Option is " + listOfOptions);

    if (await page.isVisible(sddLocator + "//*[text()='All']"))
        await page.click(sddLocator + "//*[contains(@class,'select-all')]");

    for (let option of listOfOptions) {
        await page.click("xpath=//*[@role='option']//*[contains(text(),'" + option + "')]");
    }

    await page.click(sddLocator);
}

/**
 * Select multi option select ng-select dropdown by visible text option
 * @param {WebElement} sddLocator 
 * @param {Array} listOfOptions 
 * @param {Boolean} selectAll
 */
const deSelectMultipleOptionsInDropdown = async (page, sddLocator, listOfOptions, deSelectAll = false) => {

    if (sddLocator === undefined || sddLocator === null)
        throw new Error("Dropdown locator is " + sddLocator);

    await page.click(sddLocator);

    if (deSelectAll) {
        if (await page.isVisible(sddLocator + "//*[contains(@class,'all-selected')]"))
            await page.click(sddLocator + "//*[contains(@class,'selectall')]");

        await page.click(sddLocator);
        return;
    }

    if (listOfOptions === undefined || listOfOptions === null || listOfOptions.length === 0)
        throw new Error("Option is " + listOfOptions);

    if (!await page.isVisible(sddLocator + "//*[text()='All']"))
        await page.click(sddLocator + "//*[contains(@class,'select-all')]");

    for (let option of listOfOptions) {
        await page.click("xpath=//*[@role='option']//*[contains(text(),'" + option + "')]");
    }

    await page.click(sddLocator);
}

module.exports = { selectOptionInDropdown, selectMultipleOptionsInDropdown, deSelectMultipleOptionsInDropdown };
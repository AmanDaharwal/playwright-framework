const { TIMEOUT } = require("../constants/Timeouts");

//headers
const hdrPage = "xpath=//h1";
const hdrCard = "xpath=//h2";
const hdrModel = "xpath=//*[@class='modal-header']//h2";

/**
 * Module to get page title of a page
 * @param {Page} page 
 */
const getPageTitle = async (page) => {
    return await page.innerText(hdrPage);
};

/**
 * Module to get card/setion title in a page
 * Note: This module is only pages having single card/section in a page
 * @param {Page} page 
 */
const getCardTitle = async (page) => {
    return await page.innerText(hdrCard)
};

/**
 * Module to get card/setion title in a page
 * Note: This module is only pages having single card/section in a page
 * @param {Page} page 
 */
const getModelPopUpTitle = async (page) => {
    return await page.innerText(hdrModel)
};

module.exports = { getPageTitle, getCardTitle, getModelPopUpTitle };
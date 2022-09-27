const { TIMEOUT } = require("../constants/Timeouts");
const { getNumberFromString } = require("../util/stringUtils");

//Toast
const toastMessage = "xpath=//*[@class='toast__message']";

/**
 * Module to verify toast message is  visible or not. If Visible, return true or else false
 * @param {Page} page 
 */
const verifyToastMessage = async (page) => {
    await page.waitForSelector(toastMessage, { state: "visible", timeout: TIMEOUT.HIGHER * 2 });
    let msg = await page.innerText(toastMessage);
    console.log(msg);

    if (msg.includes("error"))
        return false;
    else if (msg === "")
        return false;

    return true;
};

/**
 * Return the confirmation number read from toast message
 */
const getConfirmationNumber = async (page) => {
    let msg = await page.innerText(toastMessage);

    if (msg.includes("Request exist"))
        return "Request exist";
    else if (msg.includes("update request already"))
        return "Request exist";


    let confirmationNumber = getNumberFromString(msg);
    return confirmationNumber;
};

module.exports = { verifyToastMessage, getConfirmationNumber };

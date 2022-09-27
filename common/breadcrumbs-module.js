const {titleCase} = require("../util/stringUtils");

//Link
const txtbreadcrumbLink = "xpath=//*[@class='breadcrumb']";

/**
 * Click on breadcrumb link
 * @param {page} page
 * @param {breadcrumb link text as in UI} breadcrumbLink
 */
const clickOnBreadcrumbLink = async (page, breadcrumbLink) => {
  console.log("Click on breadcrumb link");
  
  const link = titleCase(breadcrumbLink);

  const clickLink = "xpath=//*[@class='breadcrumb']//a/*[text()='" + link + "']";
  console.log("xpath created  = " + clickLink);

  try {
    await page.click(clickLink);
  } catch (err) {
    console.log("Unable to click on breadcrumb link - " + link + "\n Please check proper link is provided");
  }
};

/**
 * Get the breadcrumb link text on page
 * @param {page} page
 */
const getBreadcrumbLinkText = async (page) => {
  console.log("Get the breadcrumb link text on page");

  return await page.innerText(txtbreadcrumbLink);
};

/**
 * Validate table column header
 */
const validateBreadCrumbs = async (page, breadcrumb) => {
  const breadcrumbLink = `xpath=//li[@title='${breadcrumb}']`;
  console.log(`Verify if ${breadcrumb} is present in breadcumbs using ${breadcrumbLink}`);
  return await page.isVisible(breadcrumbLink);
};

module.exports = {
  clickOnBreadcrumbLink,
  getBreadcrumbLinkText,
  validateBreadCrumbs
};

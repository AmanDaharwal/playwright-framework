//Linktext
const ltxtDashboard = "xpath=//*[@class='link-list']//*[contains(@href,'/dashboard/')]";

/**
 * Validate page title is as expected
 * @param {page} page
 * @param {string} expectedTitle
 */
const validatePageTitle = async (page, expectedTitle) => {
  let actualPageTitle;
  actualPageTitle = await page.title();
  console.log(`Validating Page title : Actual - ${actualPageTitle} & Expected - ${expectedTitle}`);
  return actualPageTitle === expectedTitle;
};

/**
 * Validate breadcrumb text on the page
 * @param {page} page
 * @param {string} breadcrumb
 */
const validateBreadCrumbsText = async (page, breadcrumb) => {
  const breadcrumbLink = `xpath=//li[@title='${breadcrumb}']`;
  console.log(`Verify if ${breadcrumb} is present in breadcumbs using ${breadcrumbLink}`);
  return await page.isVisible(breadcrumbLink);
};

/**
 * Validate if app breadcrumbs are displayed
 * @param {page} page
 */
const isAppBreadcrumbDisplayed = async (page) => {
  console.log(`Validate if app breadcrumbs are displayed`);
  return await page.isVisible("app-breadcrumb");
};

module.exports = { validatePageTitle, validateBreadCrumbsText, isAppBreadcrumbDisplayed };

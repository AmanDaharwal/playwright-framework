const login = require("./login-module");
const logout = require("./logout-module");
const { validatePageTitle, validateBreadCrumbsText, isAppBreadcrumbDisplayed, navigateToDashboard } = require("./common-functions-module");
const { verifyToastMessage, getConfirmationNumber } = require("./toastMessage-module");
const waitForLoaderToDisappear = require("./loader-module");
const { clickOnPageNumber, getTotalNumberOfData, getTotalNumberOfRecordsInPage, isPaginationVisible } = require("./pagination-module");
const { clickOnBreadcrumbLink, getBreadcrumbLinkText, validateBreadCrumbs } = require("./breadcrumbs-module");
const uploadDocument = require("./uploadDocument-module");
const isFileDownloaded = require("./fileDownload-module");
const { getPageTitle, getCardTitle, getModelPopUpTitle } = require("./getPageHeaders-module");
const verifyMaximumCharacterLimitOfTextbox = require("./verifyMaximumCharacterLimitOfTextbox");
const isEmailLink = require("./verifyEmailLinks");
const verifyDocumentOpenedInNewWindow = require("./verifyDocumentOpenedInNewWindow");
const { selectOptionInDropdown, selectMultipleOptionsInDropdown, deSelectMultipleOptionsInDropdown } = require("./dropdown-module");
const isTelephoneLink = require("./verifyTelephoneLinks");
const clickAndOpenLinkInNewTab = require("./newTab-module");
const launchApplication = require("./launchApplication-module");

module.exports = {
  login,
  logout,
  launchApplication,
  getConfirmationNumber,
  validatePageTitle,
  verifyToastMessage,
  waitForLoaderToDisappear,
  clickOnPageNumber,
  getTotalNumberOfData,
  getTotalNumberOfRecordsInPage,
  isPaginationVisible,
  clickOnBreadcrumbLink,
  getBreadcrumbLinkText,
  validateBreadCrumbs,
  uploadDocument,
  isFileDownloaded,
  getPageTitle,
  getCardTitle,
  getModelPopUpTitle,
  verifyMaximumCharacterLimitOfTextbox,
  isEmailLink,
  verifyDocumentOpenedInNewWindow,
  selectOptionInDropdown,
  selectMultipleOptionsInDropdown,
  deSelectMultipleOptionsInDropdown,
  isTelephoneLink,
  validateBreadCrumbsText,
  isAppBreadcrumbDisplayed,
  navigateToDashboard,
  clickAndOpenLinkInNewTab
};

const { expect } = require("@playwright/test");
const fs = require('fs');

/**
 * Returns true if file is downloaded successfully else false
 * @param {Page} page 
 * @param {Locator{String}} btnDownload //Make sure to provide download button loactor(xpath/id/css/text//etc)
 */
const isFileDownloaded = async (page, btnDownload) => {

  const [download] = await Promise.all([

    page.waitForEvent('download'),

    page.locator(btnDownload).click(),
  ]);

  // Wait for the download process to complete
  const filePath = await download.path();
  console.log("Path of file downloaded is ", filePath);

  if (fs.existsSync(filePath))
    return true;
  else
    return false;
}

module.exports = isFileDownloaded;

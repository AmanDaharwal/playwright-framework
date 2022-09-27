//Text
const txtPaginationText = "xpath=//*[@class='pagination-text']";
const txtTableRows = "xpath=//tbody//tr";

//Button
const btnNextPage = "xpath=//*[contains(@aria-label,'Next Page')]";

/**
 * Return the total number of records available in the table
 * @param {*} page 
 */
const getTotalNumberOfData = async (page) => {
    let paginationtxt = await page.innerText(txtPaginationText);
    let index = paginationtxt.indexOf("of");
    let count = paginationtxt.substring(index + 2);
    return Number(count);
}

 /**
 * Select the pageNum in pagition of table
 * @param {Number} pageNum 
 */
const clickOnPageNumber = async(page, pageNum) => {
    if(((pageNum - 1) % 5 === 0) & pageNum != 1){
        await page.click(btnNextPage);
    }
    else{
        await page.click("//*[contains(@aria-label,'Page') and contains(text(), '"+pageNum+"')]");
    }
    
}

/**
 * Return the total number of records display in the page for a table
 * @param {Page Object} page 
 */
const getTotalNumberOfRecordsInPage = async(page) => {
    let count = await page.$$(txtTableRows);
    return count.length;
}

/**
 * Return true if pagination is visible else false
 */
const isPaginationVisible = async(page)=> {
    return await page.isVisible(txtPaginationText);
}

module.exports = {
    clickOnPageNumber,
    getTotalNumberOfData,
    getTotalNumberOfRecordsInPage,
    isPaginationVisible
};

//** NOTE: Only use above module, if the page has only one table. Above moodule needs update for multiple tables in a page */
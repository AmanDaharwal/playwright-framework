/**
 * Upload the document provided in arguments. Note: Keep the document in the project location and provide the document with folder name. example mention below
 * @param {Page} page 
 * @param {WebElemnt} btnUploadDocument 
 * @param {String} documentToUpload ex: //resources//document.pdf
 */
const uploadDocument = async(page, btnUploadDocument, documentToUpload) =>{

    let filePath = process.cwd();
    while(filePath.includes("\\")){
        filePath = filePath.replace("\\", '//');
    }
    let fileToUpload = filePath + documentToUpload;
    console.log("File path is ", fileToUpload);

    await page.setInputFiles(btnUploadDocument, fileToUpload);
}

module.exports = uploadDocument;
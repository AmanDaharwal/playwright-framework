
/**
 * Convert and return the string provided to Title case string( ex: Title Case)
 * @param {String} str
 */
const titleCase = (str) => {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    let titleCaseString = str.join(" ");
    console.log("value of Title case string" + titleCaseString);
    return titleCaseString;
}

/**
     * Convert the string date to Date object
     * stringToDate("17/9/2014","dd/MM/yyyy","/");
       stringToDate("9/17/2014","mm/dd/yyyy","/");
       stringToDate("9-17-2014","mm-dd-yyyy","-");
     * @param {17/9/2014} _date 
     * @param {dd/MM/yyyy} _format 
     * @param {/} _delimiter 
     */
const stringToDate = (_date, _format, _delimiter) => {
    console.log("Inside stringToDate() of StringUtils");
    let formatLowerCase = _format.toLowerCase();
    let formatItems = formatLowerCase.split(_delimiter);
    let dateItems = _date.split(_delimiter);
    let monthIndex = formatItems.indexOf("mm");
    let dayIndex = formatItems.indexOf("dd");
    let yearIndex = formatItems.indexOf("yyyy");
    let month = parseInt(dateItems[monthIndex]);
    month -= 1;
    let formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    return formatedDate;
}

/**
 * Generate a random string of length provided
 * @param {Number} length
 */
const getRandomString = (length) => {
    var randomChars = "0123456789";
    var result = "";
    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

/**
 * Returns a random TA email id
 */
const getRandomTATestEmail = () => {
    return `test${getRandomString(4)}@ta.com`;
}

/**
 * validate string is a valid url if yes returns true else false
 * @param {String{URL}} str 
 */
const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator                         
    return !!pattern.test(str);
}

/**
 * Extract a number available in given given and return its value in the form of string
 * @param {String} msg 
 */
const getNumberFromString = (msg) => {
    try {
        let numberString = msg.match(/\d/g);
        numberString = numberString.join("");
        return numberString;
    }
    catch{
        return "No Number exist in String to extract\nGiven string - " + msg;
    }
}

/**
 * Sort and Return the given array in acsending/descending order
 */
const sortStringArray = (array, ascending = true) => {

    if (ascending)
        return array.sort();

    array.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
    return array;
}

module.exports = { titleCase, stringToDate, getRandomString, getRandomTATestEmail, validURL, getNumberFromString, sortStringArray };

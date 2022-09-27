/**
 * Validate if given date(mm/dd/yyyy) is valid
 * @param {(mm/dd/yyyy)} date
 */
function isValidDate(date) {
    if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(date)) {
        return false;
    }
    var [mm, dd, yyyy] = date.split("/").map((val) => parseInt(val, 10));
    // console.log("splited date -- ",mm,dd,yyyy)
    mm -= 1;
    const dt = new Date(yyyy, mm, dd);
    // console.log("parsed date -- ", dt)
    return dt && dt.getMonth() == mm && dt.getDate() == dd && dt.getFullYear() == yyyy;
}

/**
 * Validate given date and returns true if given date is of today else false
 * @param {mm/dd/yyyy} date
 */
function isToday(date) {
    if (isValidDate(date)) {
        const currDate = new Date();
        var [mm, dd, yyyy] = date.split("/").map((val) => parseInt(val, 10));
        mm -= 1;
        const dt = new Date(yyyy, mm, dd);
        return (
            dt &&
            dt.getDate() === currDate.getDate() &&
            dt.getMonth() === currDate.getMonth() &&
            dt.getFullYear() === currDate.getFullYear()
        );
    }
    return false;
}

module.exports = { isValidDate, isToday };

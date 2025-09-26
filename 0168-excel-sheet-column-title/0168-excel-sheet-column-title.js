/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    let result = "";

    while (columnNumber > 0) {
        columnNumber--; // adjust because A starts at 1, not 0
        let char = String.fromCharCode((columnNumber % 26) + 65); 
        result = char + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};


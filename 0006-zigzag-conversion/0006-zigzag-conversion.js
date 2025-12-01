/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = new Array(numRows).fill("").map(() => "");
    let currRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currRow] += char;

        // switch direction when we hit the top or bottom row
        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // move row pointer
        currRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};

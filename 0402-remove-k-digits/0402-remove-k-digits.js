/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];

    for (let digit of num) {
        while (
            k > 0 &&
            stack.length > 0 &&
            stack[stack.length - 1] > digit
        ) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // agar k abhi bhi bacha hai → end se remove karo
    while (k > 0) {
        stack.pop();
        k--;
    }

    // result string
    let result = stack.join("").replace(/^0+/, ""); // remove leading zeros

    return result === "" ? "0" : result;
};
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
     let sum = BigInt("0b" + a) + BigInt("0b" + b); // convert to BigInt using binary
    return sum.toString(2);
};
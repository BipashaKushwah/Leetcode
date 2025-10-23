/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
// ✅ define function first
var arrangeCoins = function(n) {
    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};

// ✅ then call it
var param_1 = 5;   // example input
var ret = arrangeCoins(param_1);
console.log(ret);  // Output: 2

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
      const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]); // possible primes for set bits
  let count = 0;

  for (let num = left; num <= right; num++) {
    const bits = num.toString(2).split('1').length - 1; // count of 1's
    if (primes.has(bits)) count++;
  }

  return count;
};
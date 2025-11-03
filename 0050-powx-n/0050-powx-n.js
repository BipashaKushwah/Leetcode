/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
     if (n === 0) return 1; // base case

  // handle negative powers
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) { // if n is odd
      result *= x;
    }
    x *= x;   // square the base
    n = Math.floor(n / 2); // halve the exponent
  }

  return result; 
};
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
   if (num < 0) return false;
  if (num === 0 || num === 1) return true;

  let left = 2;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prod = mid * mid;       // safe for typical 32-bit inputs
    if (prod === num) return true;
    if (prod < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false; 
};
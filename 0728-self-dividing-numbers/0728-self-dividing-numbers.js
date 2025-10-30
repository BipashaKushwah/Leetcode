/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
     const result = [];

  for (let num = left; num <= right; num++) {
    let n = num;
    let isSelfDividing = true;

    while (n > 0) {
      const digit = n % 10;
      if (digit === 0 || num % digit !== 0) {
        isSelfDividing = false;
        break;
      }
      n = Math.floor(n / 10);
    }

    if (isSelfDividing) result.push(num);
  }

  return result;
};
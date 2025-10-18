/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? num1.charCodeAt(i) - 48 : 0; // '0' -> 48
    const y = j >= 0 ? num2.charCodeAt(j) - 48 : 0;
    const sum = x + y + carry;

    result = (sum % 10) + result; // prepend digit
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
};
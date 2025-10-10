/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";

  const hexChars = "0123456789abcdef";
  let result = "";

  // Handle negative numbers using two's complement
  if (num < 0) {
    num = 2 ** 32 + num;
  }

  // Convert to hex manually
  while (num > 0) {
    const remainder = num % 16;
    result = hexChars[remainder] + result;
    num = Math.floor(num / 16);
  }

  return result;
};
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) return "0";

    let result = "";

    // Handle sign
    if (Math.sign(numerator) * Math.sign(denominator) < 0) {
        result += "-";
    }

    // Work with positive values
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    // Integer part
    result += Math.floor(num / den);
    let remainder = num % den;

    if (remainder === 0) return result; // no decimal part

    result += ".";
    let map = new Map(); // store remainder -> index in result
    let decimalPart = "";

    while (remainder !== 0) {
        if (map.has(remainder)) {
            // repeating part found
            let idx = map.get(remainder);
            decimalPart = decimalPart.slice(0, idx) + "(" + decimalPart.slice(idx) + ")";
            result += decimalPart;
            return result;
        }

        map.set(remainder, decimalPart.length);
        remainder *= 10;
        decimalPart += Math.floor(remainder / den);
        remainder %= den;
    }

    result += decimalPart;
    return result;
};

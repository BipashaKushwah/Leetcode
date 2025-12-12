/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    
    dividend = dividend > 0 ? -dividend : dividend;
    divisor = divisor > 0 ? -divisor : divisor;
    
    let quotient = 0;
    
    while (dividend <= divisor) {
        let temp = divisor;
        let count = 1;
        
        while (temp >= dividend - temp) {
            temp += temp;
            count += count;
        }
        
        dividend -= temp;
        quotient += count;
    }
    
    return sign * quotient;
};
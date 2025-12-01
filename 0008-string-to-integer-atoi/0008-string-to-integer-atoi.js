/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Skip leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    // Check sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Process digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';
        result = result * 10 + digit;
        i++;
        
        // Check for overflow
        if (result > 2147483647) {
            return sign === 1 ? 2147483647 : -2147483648;
        }
    }
    
    return result * sign;
};
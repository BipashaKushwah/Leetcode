/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const maxInt = 2147483647;
    const maxIntDiv10 = Math.floor(maxInt / 10);
    const maxIntMod10 = maxInt % 10;
    
    let sign = 1;
    if (x < 0) {
        sign = -1;
        x = -x;
    }
    
    let reversed = 0;
    while (x > 0) {
        const digit = x % 10;
        x = Math.floor(x / 10);
        if (reversed > maxIntDiv10 || (reversed === maxIntDiv10 && digit > maxIntMod10)) {
            return 0;
        }
        reversed = reversed * 10 + digit;
    }
    
    return sign * reversed;
};
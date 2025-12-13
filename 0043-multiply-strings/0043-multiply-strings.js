/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    
    let a = num1.split('').reverse().join('');
    let b = num2.split('').reverse().join('');
    const m = a.length;
    const n = b.length;
    let result = new Array(m + n).fill(0);
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const digit1 = parseInt(a[i]);
            const digit2 = parseInt(b[j]);
            const product = digit1 * digit2;
            const sum = product + result[i + j];
            result[i + j] = sum % 10;
            result[i + j + 1] += Math.floor(sum / 10);
        }
    }
    
    let res = result.reverse().join('');
    let start = 0;
    while (start < res.length && res[start] === '0') {
        start++;
    }
    return start === res.length ? '0' : res.substring(start);
};
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    let current = "1";
    for (let i = 2; i <= n; i++) {
        let nextTerm = '';
        let j = 0;
        while (j < current.length) {
            let count = 1;
            while (j + 1 < current.length && current[j] === current[j + 1]) {
                count++;
                j++;
            }
            nextTerm += count.toString() + current[j];
            j++;
        }
        current = nextTerm;
    }
    return current;
};
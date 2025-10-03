/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   
    const freq = {};

    // Count frequency of each character
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Find first character with frequency 1
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     const freq = {};

    for (let char of magazine) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Check each letter in ransomNote
    for (let char of ransomNote) {
        if (!freq[char]) {
            // Letter not available or already used up
            return false;
        }
        freq[char]--; // Use the letter
    }

    return true;
};
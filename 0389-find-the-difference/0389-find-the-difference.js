/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    const map = new Map();
    
    // Count characters in s
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    // Check characters in t
    for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) {
            return char;
        }
        map.set(char, map.get(char) - 1);
    }  
};
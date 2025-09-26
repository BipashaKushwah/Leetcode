/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let words = s.trim().split(" ");   // trim removes spaces at ends
    return words[words.length - 1].length;
};
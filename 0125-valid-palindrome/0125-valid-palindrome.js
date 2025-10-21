/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let a=s.toLowerCase().replace(/[^a-z0-9]/g, "");
let reversed = a.split("").reverse().join("");
 if(a===reversed){
    return true
 }else{
    return false
 }
};
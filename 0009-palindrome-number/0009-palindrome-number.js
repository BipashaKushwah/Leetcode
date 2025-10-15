let x= 10;
var isPalindrome = function(x) {
  let rev = String(x).split("").reverse().join("");
  return +rev === x;}
  console.log(isPalindrome(x));
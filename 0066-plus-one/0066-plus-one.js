/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    const n = digits.length;

    // Iterate from the rightmost digit to the leftmost digit
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // If the digit is less than 9, increment it and we are done
            digits[i]++;
            return digits;
        } else {
            // If the digit is 9, set it to 0 and carry over
            digits[i] = 0;
        }
    }

    // If we reach here, it means all digits were 9s (e.g., [9,9,9])
    // We need to prepend a 1 to the array.
    // Example: [9,9] becomes [0,0] in the loop, then [1,0,0] here.
    digits.unshift(1); // Adds 1 to the beginning of the array
    return digits;  
};
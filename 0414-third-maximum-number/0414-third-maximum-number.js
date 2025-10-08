/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // Step 1: remove duplicates
    const uniqueNums = [...new Set(nums)];
    
    // Step 2: sort descending
    uniqueNums.sort((a, b) => b - a);
    
    // Step 3: check length
    if (uniqueNums.length >= 3) {
        return uniqueNums[2]; // third maximum
    } else {
        return uniqueNums[0]; // maximum
    }
};

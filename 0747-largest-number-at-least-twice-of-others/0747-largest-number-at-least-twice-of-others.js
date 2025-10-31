/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -Infinity;
    let maxIndex = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && max < 2 * nums[i]) {
            return -1;
        }
    }
    
    return maxIndex;
};
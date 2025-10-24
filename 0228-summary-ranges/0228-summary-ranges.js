/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    let result = [];
    let start = nums[0];
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            if (start === nums[i]) {
                result.push(start.toString());
            } else {
                result.push(`${start}->${nums[i]}`);
            }
            start = nums[i + 1];
        }
    }
    
    if (start === nums[nums.length - 1]) {
        result.push(start.toString());
    } else {
        result.push(`${start}->${nums[nums.length - 1]}`);
    }
    
    return result;
};
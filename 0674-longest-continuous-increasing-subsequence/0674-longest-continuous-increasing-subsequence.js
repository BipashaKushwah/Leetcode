/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
     if (nums.length === 0) return 0;

  let count = 1; // current streak
  let maxCount = 1; // longest streak so far

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      count++;
    } else {
      count = 1;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
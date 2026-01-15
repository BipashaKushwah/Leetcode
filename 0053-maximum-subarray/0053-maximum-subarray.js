/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either take current number alone or extend previous subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update global maximum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   nums.sort((a, b) => a - b); // Sort in ascending order
  
  const n = nums.length;
  
  // Case 1: product of three largest numbers
  const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  
  // Case 2: product of two smallest (most negative) and largest number
  const option2 = nums[0] * nums[1] * nums[n - 1];
  
  return Math.max(option1, option2); 
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
     nums.sort((a, b) => b - a); // sort in descending order

  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i], b = nums[i + 1], c = nums[i + 2];
    if (a < b + c) {
      return a + b + c; // valid triangle found
    }
  }

  return 0; 
};
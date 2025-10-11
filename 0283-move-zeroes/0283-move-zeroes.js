/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let insertPos = 0;

  // Step 1: Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Step 2: Fill the rest with zeros
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  return nums; // optional — since modification is in-place
};

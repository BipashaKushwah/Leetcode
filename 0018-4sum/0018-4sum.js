/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b); // Step 1: Sort array
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for second number
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          // Move pointers and skip duplicates
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

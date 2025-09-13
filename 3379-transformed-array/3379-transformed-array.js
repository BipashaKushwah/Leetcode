/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
  let n = nums.length;
  let result = new Array(n);

  for (let i = 0; i < n; i++) {
    let steps = nums[i];
    // Circular movement (wrap around using modulo)
    let newIndex = ((i + steps) % n + n) % n;
    result[i] = nums[newIndex];
  }

  return result;
};

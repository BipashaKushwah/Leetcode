/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
     const seen = new Set();
  let duplicate = -1;
  let n = nums.length;
  let sum = 0;

  for (let num of nums) {
    if (seen.has(num)) {
      duplicate = num;   // found the repeated number
    }
    seen.add(num);
    sum += num;
  }

  const expectedSum = (n * (n + 1)) / 2;
  const missing = expectedSum - (sum - duplicate);

  return [duplicate, missing];
};
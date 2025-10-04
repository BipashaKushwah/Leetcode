/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map();
  const result = [];

  // Count frequency of each number in nums1
  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Iterate nums2 and add to result if it exists in map
  for (let num of nums2) {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1); // Decrease count
    }
  }

  return result;
};



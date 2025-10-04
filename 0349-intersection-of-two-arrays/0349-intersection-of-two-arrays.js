/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Filter elements in set1 that are also in set2
  const result = [...set1].filter(num => set2.has(num));

  return result;
};
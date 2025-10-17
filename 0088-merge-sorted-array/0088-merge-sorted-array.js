/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Combine the first m elements of nums1 and all elements of nums2
    let merged = nums1.slice(0, m).concat(nums2.slice(0, n));
    
    // Sort in ascending order
    merged.sort((a, b) => a - b);
    
    // Copy back to nums1
    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i];
    }
};

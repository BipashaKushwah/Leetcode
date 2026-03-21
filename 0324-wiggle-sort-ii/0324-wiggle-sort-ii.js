/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let sorted = [...nums].sort((a, b) => a - b);
    
    let n = nums.length;
    let mid = Math.floor((n + 1) / 2);

    // left = smaller half
    let left = sorted.slice(0, mid).reverse();
    // right = larger half
    let right = sorted.slice(mid).reverse();

    let i = 0, l = 0, r = 0;

    // fill alternately
    while (i < n) {
        if (i % 2 === 0) {
            nums[i] = left[l++];
        } else {
            nums[i] = right[r++];
        }
        i++;
    }
};
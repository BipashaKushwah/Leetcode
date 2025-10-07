/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
        const n = nums.length;
    const seen = new Set(nums);
    const missing = [];

    for (let i = 1; i <= n; i++) {
        if (!seen.has(i)) {
            missing.push(i);
        }
    }

    return missing;

};
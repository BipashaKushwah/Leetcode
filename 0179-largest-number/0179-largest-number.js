/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(String);
    nums.sort((a, b) => {
        const ab = a + b;
        const ba = b + a;
        return ab > ba ? -1 : 1;
    });
    if (nums[0] === '0') return '0';
    return nums.join('');
};
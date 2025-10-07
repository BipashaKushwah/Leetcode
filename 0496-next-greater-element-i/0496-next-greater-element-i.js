/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let nextMap = new Map();

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        let num = nums2[i];

        // Remove elements smaller than current num
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop();
        }

        // If stack is empty → no greater element
        nextMap.set(num, stack.length ? stack[stack.length - 1] : -1);

        // Push current num to stack
        stack.push(num);
    }

    // Build result for nums1 using the map
    return nums1.map(num => nextMap.get(num));
};

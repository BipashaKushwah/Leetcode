/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let n = nums.length;

    // Reverse the whole array
    reverse(nums, 0, n - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining n-k elements
    reverse(nums, k, n - 1);
};

// Helper function to reverse elements between two indices
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage:
let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);  // Output: [5, 6, 7, 1, 2, 3, 4]

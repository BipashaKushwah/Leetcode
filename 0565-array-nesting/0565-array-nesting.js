/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let n = nums.length;
    let visited = new Array(n).fill(false);
    let longest = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let count = 0;
            let j = i;
            while (!visited[j]) {
                visited[j] = true;
                j = nums[j];
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
};

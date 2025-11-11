/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const result = new Array(nums.length);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const leftSquare = Math.abs(nums[left]);
        const rightSquare = Math.abs(nums[right]);
        
        if (leftSquare >= rightSquare) {
            result[i] = leftSquare * leftSquare;
            left++;
        } else {
            result[i] = rightSquare * rightSquare;
            right--;
        }
    }
    
    return result;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            result.push([...path]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            const next = remaining[i];
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack([...path, next], newRemaining);
        }
    }
    
    backtrack([], nums);
    return result;
};
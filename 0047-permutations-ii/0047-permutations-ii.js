/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            result.push([...path]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            if (i > 0 && remaining[i] === remaining[i - 1]) {
                continue;
            }
            const next = remaining[i];
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack([...path, next], newRemaining);
        }
    }
    
    backtrack([], nums);
    return result;
};
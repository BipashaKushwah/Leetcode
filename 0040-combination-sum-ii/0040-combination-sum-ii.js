/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    
    function backtrack(start, path, remain) {
        if (remain === 0) {
            result.push([...path]);
            return;
        }
        if (remain < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            backtrack(i + 1, path, remain - candidates[i]);
            path.pop();
        }
    }
    
    backtrack(0, [], target);
    return result;
};
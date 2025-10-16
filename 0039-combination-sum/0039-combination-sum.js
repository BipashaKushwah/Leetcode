/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (remain, path, start) => {
        if (remain === 0) {
            result.push([...path]); // Found a valid combination
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const current = candidates[i];
            if (current <= remain) {
                path.push(current); // Choose the number
                backtrack(remain - current, path, i); // Not i+1 because we can reuse same element
                path.pop(); // Backtrack
            }
        }
    };

    backtrack(target, [], 0);
    return result;
};

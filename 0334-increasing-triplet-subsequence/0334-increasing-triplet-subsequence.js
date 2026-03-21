/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // smallest update
        } else if (num <= second) {
            second = num; // second smallest
        } else {
            // num > first && num > second
            return true;
        }
    }

    return false;
};
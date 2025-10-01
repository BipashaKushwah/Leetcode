/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    // loop over 32 bits
    for (let i = 0; i < 32; i++) {
        let bitSum = 0;

        for (let num of nums) {
            bitSum += (num >> i) & 1;  // count ith bit
        }

        bitSum %= 3;   // remove triplets

        if (bitSum !== 0) {
            result |= (1 << i);  // set ith bit
        }
    }

    // handle negative numbers (JS has signed 32-bit shift)
    if (result >= Math.pow(2, 31)) {
        result -= Math.pow(2, 32);
    }

    return result;
};

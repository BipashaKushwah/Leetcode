/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let total_tank = 0;
    let current_tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        total_tank += gas[i] - cost[i];
        current_tank += gas[i] - cost[i];

        if (current_tank < 0) {
            current_tank = 0;
            start = i + 1;
        }
    }

    return total_tank >= 0 ? start : -1;
};
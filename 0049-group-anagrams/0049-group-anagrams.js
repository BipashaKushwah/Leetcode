/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const groups = {};
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (!groups[sorted]) {
            groups[sorted] = [];
        }
        groups[sorted].push(str);
    }
    return Object.values(groups);
};
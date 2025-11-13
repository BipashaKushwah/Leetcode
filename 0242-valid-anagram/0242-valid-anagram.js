/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let b = t.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (a.length !== b.length) return false;

    // Sort karke compare
    return a.split("").sort().join("") === b.split("").sort().join("");
};

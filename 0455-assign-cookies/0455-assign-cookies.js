/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  
    g.sort((a, b) => a - b); // Sort greed factors
    s.sort((a, b) => a - b); // Sort cookie sizes

    let child = 0; // pointer for children
    let cookie = 0; // pointer for cookies

    while (child < g.length && cookie < s.length) {
        if (s[cookie] >= g[child]) {
            // Cookie satisfies the child
            child++;
        }
        // Move to next cookie
        cookie++;
    }

    return child; //
};
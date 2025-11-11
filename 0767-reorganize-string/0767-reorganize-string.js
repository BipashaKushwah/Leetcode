/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const n = s.length;
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    const maxCount = Math.max(...Object.values(count));
    if (maxCount > (n + 1) / 2) {
        return "";
    }
    
    const list = Object.entries(count).map(([char, count]) => [count, char]);
    list.sort((a, b) => b[0] - a[0]);
    
    let result = [];
    
    while (list.length > 1) {
        const [count1, char1] = list.shift();
        const [count2, char2] = list.shift();
        result.push(char1);
        result.push(char2);
        
        if (count1 > 1) {
            list.push([count1 - 1, char1]);
        }
        if (count2 > 1) {
            list.push([count2 - 1, char2]);
        }
        
        list.sort((a, b) => b[0] - a[0]);
    }
    
    if (list.length === 1) {
        const [count, char] = list[0];
        result.push(char);
    }
    
    return result.join("");
};
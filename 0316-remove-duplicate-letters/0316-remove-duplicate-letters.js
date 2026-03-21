/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let lastIndex = {};
    
    // Step 1: last occurrence store karo
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    let stack = [];
    let seen = new Set();

    // Step 2: iterate string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // already included → skip
        if (seen.has(char)) continue;

        // Step 3: maintain lexicographical order
        while (
            stack.length > 0 &&
            char < stack[stack.length - 1] &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            seen.delete(stack.pop());
        }

        stack.push(char);
        seen.add(char);
    }

    return stack.join("");
};
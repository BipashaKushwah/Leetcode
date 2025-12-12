/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    let result = [''];
    
    for (const digit of digits) {
        const letters = mapping[digit];
        let newResult = [];
        for (const combination of result) {
            for (const letter of letters) {
                newResult.push(combination + letter);
            }
        }
        result = newResult;
    }
    
    return result;
};
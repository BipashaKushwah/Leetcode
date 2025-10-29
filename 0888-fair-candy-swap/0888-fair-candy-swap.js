/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sumA = aliceSizes.reduce((a, b) => a + b, 0);
    const sumB = bobSizes.reduce((a, b) => a + b, 0);
    const target = (sumA - sumB) / 2;
    const aliceSet = new Set(aliceSizes);
    
    for (const y of bobSizes) {
        const x = y + target;
        if (aliceSet.has(x)) {
            return [x, y];
        }
    }
};
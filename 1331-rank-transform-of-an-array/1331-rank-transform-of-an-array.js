/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
     const sorted = [...new Set(arr)].sort((a, b) => a - b);

  // Map each number to its rank
  const rankMap = {};
  for (let i = 0; i < sorted.length; i++) {
    rankMap[sorted[i]] = i + 1; // rank starts from 1
  }

  // Replace each number with its rank
  return arr.map(num => rankMap[num]);
};
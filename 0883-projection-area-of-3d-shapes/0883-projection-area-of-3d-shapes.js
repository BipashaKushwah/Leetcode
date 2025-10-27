/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
   let xy = 0; // top view
  let yz = 0; // front view (column max)
  let zx = 0; // side view (row max)
  
  const n = grid.length;

  for (let i = 0; i < n; i++) {
    let rowMax = 0;
    let colMax = 0;

    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) xy++; // top view (non-zero cells)
      rowMax = Math.max(rowMax, grid[i][j]); // side view
      colMax = Math.max(colMax, grid[j][i]); // front view
    }

    zx += rowMax;
    yz += colMax;
  }

  return xy + yz + zx;  
};
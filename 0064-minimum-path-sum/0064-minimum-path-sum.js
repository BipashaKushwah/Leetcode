/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    // Fill first row
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
    }

    // Fill first column
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    // Fill remaining cells
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    return grid[m - 1][n - 1];
};

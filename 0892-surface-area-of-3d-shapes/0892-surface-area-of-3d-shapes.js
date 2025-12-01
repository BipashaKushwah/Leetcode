/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let n = grid.length;
    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            let h = grid[i][j];
            if (h > 0) {
                // Each column adds top + bottom + (h * 4 sides)
                total += 2 + (h * 4);
            }

            // Hide shared faces with top neighbor
            if (i > 0) {
                total -= 2 * Math.min(grid[i][j], grid[i - 1][j]);
            }

            // Hide shared faces with left neighbor
            if (j > 0) {
                total -= 2 * Math.min(grid[i][j], grid[i][j - 1]);
            }
        }
    }

    return total;
};

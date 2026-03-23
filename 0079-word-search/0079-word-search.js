/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;

    const dfs = (i, j, k) => {
        // agar pura word match ho gaya
        if (k === word.length) return true;

        // boundary + mismatch check
        if (
            i < 0 || j < 0 || i >= m || j >= n ||
            board[i][j] !== word[k]
        ) return false;

        // mark visited
        let temp = board[i][j];
        board[i][j] = "#";

        // 4 directions
        let found =
            dfs(i + 1, j, k + 1) ||
            dfs(i - 1, j, k + 1) ||
            dfs(i, j + 1, k + 1) ||
            dfs(i, j - 1, k + 1);

        // backtrack (restore)
        board[i][j] = temp;

        return found;
    };

    // har cell se start karo
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};
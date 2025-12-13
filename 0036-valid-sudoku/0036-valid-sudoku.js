/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array(9).fill().map(() => new Set());
    const cols = Array(9).fill().map(() => new Set());
    const boxes = Array(3).fill().map(() => Array(3).fill().map(() => new Set()));
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];
            if (cell === '.') continue;
            
            const boxI = Math.floor(i / 3);
            const boxJ = Math.floor(j / 3);
            
            if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxI][boxJ].has(cell)) {
                return false;
            }
            
            rows[i].add(cell);
            cols[j].add(cell);
            boxes[boxI][boxJ].add(cell);
        }
    }
    
    return true;
};
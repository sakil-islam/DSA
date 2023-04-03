// 36. Valid Sudoku

// var isValidSudoku = function (board) {
//     const row = {};
//     const column = {};
//     const box = {};

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             const value = board[i][j];
//             console.log(`value = ${value}`);
//             if (value !== ".") {
//                 const boxidx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//                 console.log(`boxidx ${boxidx}`);
//                 if (row[`${i} - ${value}`] || column[`${j} - ${value}`] || box[`${boxidx} - ${value}`]) {
//                     return false;
//                 }
//                 row[`${i} - ${value}`] = true;
//                 console.log(`row ${i} - ${value}`);
//                 column[`${j} - ${value}`] = true;
//                 console.log(`column ${j} - ${value}`);
//                 box[`${boxidx} - ${value}`] = true;
//                 console.log(`box ${boxidx} - ${value}`);
//             }
//         }
//     }
//     return true;
// }

// brute Force Approach

// var isValidSudoku = function (board) {
//     for (let i = 0; i < board.length; i++) {
//         const set = new Set();
//         for (let j = 0; j < board[i].length; j++) {
//             const cell = board[i][j];
//             if (cell === ".") continue
//             if (set.has(cell)) return false;
//             set.add(cell);
//         }
//     }
//     for (let i = 0; i < board.length; i++) {
//         const set = new Set();
//         for (let j = 0; j < board[i].length; j++) {
//             const cell = board[j][i];
//             if (cell === ".") continue
//             if (set.has(cell)) return false;
//             set.add(cell);
//         }
//     }
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             const set = new Set();
//             for (let k = 0; k < 3; k++) {
//                 for (let l = 0; l < 3; l++) {
//                     const cell = board[3 * i + k][3 * j + l]
//                     if (cell === ".") continue
//                     if (set.has(cell)) return false;
//                     set.add(cell);
//                 }
//             }
//         }
//     }
//     return true;
// }

// Array of Sets solutions

// var isValidSudoku = function (board) {

//     const rows = [], cols = [], boxes = [];
//     for (let i = 0; i < board.length; i++) {
//         rows.push(new Set());
//         cols.push(new Set());
//         boxes.push(new Set());
//     }

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[i].length; j++) {
//             const cell = board[i][j];
//             if (cell === '.') continue;
//             const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
//             if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell))
//                 return false;
//             rows[i].add(cell);
//             cols[j].add(cell);
//             boxes[boxNum].add(cell);
//         }
//     }

//     return true

// };

// Strings in Set Solutions

var isValidSudoku = function (board) {
    const set = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if (cell === ".") continue;
            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const row = `row: ${i}, value ${cell}`;
            const col = `col: ${j}, value ${cell}`;
            const box = `box ${boxNum} value ${cell}`;
            if (set.has(row) || set.has(col) || set.has(box))
                return false;
            set.add(row);
            set.add(col);
            set.add(box);
        }
    }
    return true;
}

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
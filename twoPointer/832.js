// 832. Flipping an Image

function flipAnImage(matrix) {
    let temp;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0, k = matrix[0].length - 1; j <= k; j++, k--) {
            temp = (matrix[i][j] === 1 ? 0 : 1);
            matrix[i][j] = (matrix[i][k] === 1 ? 0 : 1);
            matrix[i][k] = temp;
        }
    }
    return matrix;
}
console.log(flipAnImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
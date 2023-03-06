// 119. Pascal's Triangle II

var generate = function (numRows) {
    const triangle = [];
    for (let i = 0; i <= numRows; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }
    return triangle[numRows];
}

console.log(generate(3));
// 1979. Find Greatest Common Divisor of Array

let array = [3,3];
var findGCD = function (nums) {

    arr = nums.sort((a, b) => a - b);
    let small = arr[0];
    let large = arr[arr.length - 1];
    let res = [];

    for(let j = 1; j <= small; j++){
        if (large % j === 0 && small % j ===0) {
            res.push(j);
        }
    }
    return res.pop();
};

console.log(findGCD(array));
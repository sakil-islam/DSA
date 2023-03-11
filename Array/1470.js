// 1470. Shuffle the Array

var shuffle = function (nums, n) {
    let partX = [];
    let partY = [];
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < n) {
            partX.push(nums[i])
        } else {
            partY.push(nums[i])
        }
    }
    for (let i = 0, j = 0; i < partX.length, j < partY.length; i++, j++) {
        ans.push(partX[i]);
        ans.push(partY[j]);
    }
    return ans;
};

// var shuffle = function (nums, n) {
//     const result = [];

//     for (let i = 0; i < n; i++) {
//         result.push(nums[i], nums[i + n]);
//     }

//     return result;
// }

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));
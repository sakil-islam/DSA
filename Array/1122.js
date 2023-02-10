// 1122. Relative Sort Array

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];
// let result = [];

function relativeSortArray(arr1, arr2) {
    let count = new Array(1001).fill(0);
    for (let num of arr1) {
        count[num]++;
        console.log(count[num] + 'c')
    }
    let res = [];
    for (let num of arr2) {
        while (count[num]-- > 0) {
            res.push(num);
        }
    }
    for (let i = 0; i < 1001; i++) {
        while (count[i]-- > 0) {
            res.push(i);
        }
    }
    return res;
}

// var relativeSortArray = function (arr1, arr2) {
//     for (let j = 0; j < arr1.length; j++) {
//         for (let i = 0; i < arr2.length; i++) {
//             if (arr1[j] === arr2[i]) {
//                 result.push(arr1[j]);
//             }
//         }
//     }
//     for (let j = 0; j < arr1.length; j++) {
//         for (let i = 0; i < result.length; i++) {
//             if (arr1[j] != result[i]) {
//                 result.push(arr1[j]);
//             }
//         }
//     }
//     return result;
// };

console.log(relativeSortArray(arr1, arr2))
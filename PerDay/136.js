// 136. Single Number

// var singleNumber = function (nums) {
//     let count = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count.push(nums[i]);
//             }
//         }
//     }
//     const missingElements = nums.filter((element) => !count.includes(element));
//     return missingElements.join('');
// };

// console.log(singleNumber([2, 2, 1]))

function findSingle(nums) {
    let result = 0;
    for (let num of nums) {
        console.log(num + "...");
        result ^= num;
        console.log(result);
    }
    return result;
}

console.log(findSingle([2, 2, 1]) + "f")
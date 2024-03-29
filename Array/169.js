// 169. Majority Element

// O(n) & O(n)
var majorityElement = function (nums) {
    let n = nums.length;
    const myObject = {}
    for (let i = 0; i < n; i++) {
        if (myObject[nums[i]]) {
            myObject[nums[i]] = myObject[nums[i]] + 1;
        } else {
            myObject[nums[i]] = 1
        }
    }
    for (const key in myObject) {
        if (myObject[key] > (n / 2)) {
            return key;
        }
    }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


// O(n) & O(1)
// var majorityElement = function (nums) {
//     let candidate;
//     let count = 0;

//     for (const num of nums) {
//         console.log(num, candidate, nums, count, "start");
//         if (count === 0) {
//             candidate = num;
//             console.log(num, candidate, nums, count, "middle");
//         }

//         count += (num === candidate) ? 1 : -1
//         console.log(num, candidate, nums, count, "end");
//     }

//     return candidate;
// };
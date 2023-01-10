// 1. Two Sum

// T. C. O(n^2)

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let getValue = nums[i] + nums[j];
            if (getValue === target) {
                let resultArray = [];
                resultArray.push(i);
                resultArray.push(j);
                return resultArray
            }
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));


// T. C. O(n)

function twoSumMin(nums, target) {

    //map
    let numbers = {};
    for (let i = 0; i < nums.length; i++) {
        numbers[nums[i]] = nums[i];
    }
    // console.log(numbers);
    for (const key in numbers) {
        let value = target - key;
        if (numbers[value]) {
            console.log({ a: value, b: key });
            break;
        }
    }
}

// console.log(twoSumMin([3, 5, 9, 8, 2, 4], 6));
// console.log(twoSumMin([2, 7, 11, 15], 9));
twoSumMin([2, 7, 11, 15], 9);
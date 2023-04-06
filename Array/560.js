// 560. Subarray Sum Equals K

var subarraySum = function (nums, k) {
    let count = 0,
        sum = 0,
        map = new Map();
    map.set(0, 1);
    for (const num of nums) {
        sum += num;
        console.log(sum, count, map, "1");
        if (map.has(sum - k)) {
            count += map.get(sum - k);
            console.log(sum, count, map, "2");
        }
        map.set(sum, (map.get(sum) || 0) + 1);
        console.log(sum, count, map, "3");
    }
    return count;
};


var subarraySumBF = function (nums, k) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let base = 0;
        for (let j = i; j < nums.length; j++) {
            base += nums[j];
            if (base == k) counter++;
        }
    }
    return counter;
};

// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));
// console.log(subarraySum([3, 4, 7, -2, 2, 1, 4, 2], 7));
console.log(subarraySum([-4, 3, 6, -2, 1, -1, 0, 2, -2, 3, 1], 5));
console.log(subarraySumBF([-4, 3, 6, -2, 1, -1, 0, 2, -2, 3, 1], 5));
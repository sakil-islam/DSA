// 918. Maximum Sum Circular Subarray


var maxSubarraySumCircular = function (nums) {
    let len = nums.length;

    if (len === 1) return nums[0];

    let minInt = Math.pow(2, 53);
    let currentSum = 0;
    let maxSum = - minInt - 1;

    for (let i = 0; i < len; i++) {
        currentSum = currentSum + nums[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }


    let maxInt = Math.pow(2, 50);
    let currMinSum = 0;
    let minSum = maxInt + 1;

    for (let i = 0; i < len; i++) {
        currMinSum = currMinSum + nums[i];

        if (currMinSum < minSum) {
            minSum = currMinSum;
        }
        if (currMinSum > 0) {
            currMinSum = 0;
        }
    }

    if (minSum === sum) {
        return maxSum
    }

    return Math.max(maxSum, (sum - minSum))
};

console.log(maxSubarraySumCircular([2, 5, 8, -5, -2, -6, 7, 3]));
console.log(maxSubarraySumCircular([5, -3, 5]));
console.log(maxSubarraySumCircular([-3, -2, -3]));
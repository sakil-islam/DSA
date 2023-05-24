// 53. Maximum Subarray


var maxSubArray = function (nums) {
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
  return maxSum;
};
var minSubArray = function (nums) {
  let len = nums.length;

  if (len === 1) return nums[0];

  let maxInt = Math.pow(2, 50);
  let currentSum = 0;
  let minSum = maxInt + 1;

  for (let i = 0; i < len; i++) {
    currentSum = currentSum + nums[i];

    if (currentSum < minSum) {
      minSum = currentSum;
    }
    if (currentSum > 0) {
      currentSum = 0;
    }
  }
  return minSum;
};

var findTotalSum = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([2, 5, 8, -5, -2, -6, 7, 3]));
console.log(minSubArray([-3, -2, -3]));
console.log(findTotalSum([-3, -2, -3]));
// console.log(maxSubArray([1]));
// 1800. Maximum Ascending Subarray Sum


var maxAscendingSum = function(nums) {
    nums.unshift(0);
    let len = nums.length;

    if (len === 1) return nums[0];
  
    let currentSum = 0;
    let maxSum = Number.MIN_VALUE;
  
    for (let i = 1; i < len; i++) {
        if (nums[i-1] < nums[i]) {
            currentSum = currentSum + nums[i];
        }else{
            currentSum = 0;
            currentSum += nums[i];
        }
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
};

console.log(maxAscendingSum([10,20,30,5,10,50]))
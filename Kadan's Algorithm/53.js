// 53. Maximum Subarray


var maxSubArray = function(nums) {
  let len = nums.length;

  if(len === 1) return nums[0];
  
  let minInt = Math.pow(2, 53);
  let currentSum = 0;
  let maxSum = - minInt - 1;

  for(let i = 0; i < len; i++){
    currentSum = currentSum + nums[i];

    if(currentSum > maxSum){
        maxSum = currentSum;
    }
    if(currentSum < 0){
        currentSum = 0;
    }
  }
  return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
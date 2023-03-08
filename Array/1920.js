// 1920. Build Array from Permutation


var buildArray = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }
    return ans;
};

console.log(buildArray[0, 2, 1, 5, 4]);
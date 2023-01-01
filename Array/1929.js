var getConcatenation = function (nums) {
    let len = nums.length;
    let ans=[];
    for (let i = 0; i < len; i++) {
        ans[i] = nums[i];
        ans[i + len] = nums[i]
    }
    return ans;
};
console.log(getConcatenation([1, 2, 1]));
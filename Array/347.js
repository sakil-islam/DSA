// 347. Top K Frequent Elements

var topKFrequent = function (nums, k) {

    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    let result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
    console.log(obj)
    console.log(result)

    let sortedResult = result.sort((a, b) => {
        return b[1] - a[1]
    })
    console.log(sortedResult)
    let output = []
    for (let i = 0; i < k; i++) {
        output.push(sortedResult[i][0])
    }
    return output;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3], 2))
// console.log(topKFrequent([1, 2], 2))
// console.log(topKFrequent([1], 1))
console.log(topKFrequent([5, 3, 1, 1, 1, 3, 5, 73, 1], 3))
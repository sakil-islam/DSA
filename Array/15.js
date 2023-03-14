// 15. 3Sum

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let resultArray = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((i != j && i != k && j != k) && (nums[i] + nums[j] + nums[k] === 0)) {
                    resultArray.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    const seen = new Set();

    const result = [];

    for (let triplet of resultArray) {
        triplet.sort((a, b) => a - b);

        const key = triplet.join(",");
        if (!seen.has(key)) {
            result.push(triplet);
            seen.add(key);
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));

// Output: [[-1,-1,2],[-1,0,1]]

// GPT approach

const nums = [-1, 0, 1, 2, -1, -4];

// Step 1: Sort the array
nums.sort((a, b) => a - b);
console.log(nums)

// Step 2: Initialize the result array
const result = [];

// Step 3: Loop through the array and find triplets that sum to zero
for (let i = 0; i < nums.length - 2; i++) {
    // Skip over duplicate elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
            result.push([nums[i], nums[j], nums[k]]);
            j++;
            k--;
            // Skip over duplicate elements
            while (j < k && nums[j] === nums[j - 1]) j++;
            while (j < k && nums[k] === nums[k + 1]) k--;
        } else if (sum < 0) {
            j++;
        } else {
            k--;
        }
    }
}

// Step 4: Return the result array
console.log(result);
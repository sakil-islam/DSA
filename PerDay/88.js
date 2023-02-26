// 88. Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let results = [];
    while (i < m && j < n) {
        if (nums2[j] > nums1[i]) {
            results.push(nums1[i]);
            i++;
        } else {
            results.push(nums2[j])
            j++;
        }
    }
    while (i < m) {
        results.push(nums1[i]);
        i++;
    }
    while (j < n) {
        results.push(nums2[j]);
        j++;
    }
    return results
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([], 0, [1], 1));


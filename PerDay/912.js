// 912. Sort an Array

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results
}

var sortArray = function (arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = sortArray(arr.slice(0, mid));
    let right = sortArray(arr.slice(mid));
    return merge(left, right);
}

console.log(sortArray([5, 1, 1, 2, 0, 0]))
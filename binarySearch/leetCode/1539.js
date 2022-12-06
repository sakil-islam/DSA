let arr = [2, 3, 4, 7, 11];
let k = 5;
var findKthPositive = function(arr, k) {
    let missing = [];
    let n = 1, i = 0;
    while (missing.length < k) {
        if (arr[i] == n) {
            i++;
            n++;
        }
        else {
            missing.push(n);
            n++;
        }
    }
    return missing[k - 1];
};
console.log(findKthPositive(arr, k));
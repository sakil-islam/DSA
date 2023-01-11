let arr = [20, 30, 40, 50, 60, 90, 70, 10];
let i, sum = 0;

function arraySum(arr, i = 0) {
    if (i == arr.length) {
        return;
    }
    sum = sum + arr[i];
    arraySum(arr, i + 1);
    return sum;
}

console.log(arraySum(arr));
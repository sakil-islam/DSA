let arr = [20, 30, 40, 50, 60, 90, 70, 10];

function arrayReverse(arr, start, end) {
    if (start >= end) {
        return;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    arrayReverse(arr, start + 1, end - 1);
}
arrayReverse(arr, 0, arr.length - 1);
console.log(arr);
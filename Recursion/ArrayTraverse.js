let arr = [20, 30, 40, 50, 60, 90, 70, 10];
let i;

function ArrayTraverse(arr, i = 0) {
    if (i == arr.length) {
        return;
    }
    console.log(arr[i] + "  " + i);
    ArrayTraverse(arr, i + 1);
}

ArrayTraverse(arr);
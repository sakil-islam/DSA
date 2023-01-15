let arrayA = [10, 20];
let arrayB = [10, 20];
// JavaScript program to merge two sorted arrays
function mergeArrays(arr1, arr2, n1, n2, arr3) {
    var i = 0, j = 0, k = 0;

    // traverse the arr1 and insert its element in arr3
    while (i < n1) {
        arr3[k++] = arr1[i++];
    }

    // now traverse arr2 and insert in arr3
    while (j < n2) {
        arr3[k++] = arr2[j++];
    }

    // sort the whole array arr3
    // arr3.sort();
}
var arr1 = [1, 3, 5, 7];
var n1 = arr1.length;
var arr2 = [2, 4, 6, 8];
var n2 = arr2.length;
var arr3 = new Array(n1 + n2);
mergeArrays(arr1, arr2, n1, n2, arr3);

console.log("Array after merging");
for (var i = 0; i < n1 + n2; i++) {
    process.stdout.write(arr3[i] + " ");
}

let arrayCon1SortArray = function (arr1, arr2) {
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
console.log(arrayCon1SortArray(arrayA, arrayB));

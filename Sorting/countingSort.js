// implement with countingSort(array, 0, array.length - 1)
function countingSort(arr, min, max){
    const count = {};

    // First populate the count object
    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }

    // Now, count is indexed by numbers, with values corresponding to occurrences
    // Then, iterate over count's properties from min to max:
    const sortedArr = [];

    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            sortedArr.push(i);
            count[i]--;
        }
    }
    return sortedArr;
};

console.log(countingSort([ 5, 10, 0, 3, 8, 5, 1, 10 ],1,10));
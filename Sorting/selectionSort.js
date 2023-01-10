let arr = [60, 30, 40, 55, 96, 14, 25, 34, 88];

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        // searching the small value index number;
        for (let j = i + 1; j < arr.length; j++) {

            // array show in descending order
            // if (arr[j] > arr[min]) {
            //     min = j;
            // }
            // array show in ascending order
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}

console.log(selectionSort(arr));
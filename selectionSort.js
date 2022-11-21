let arr = [10, 30, 40, 55, 66, 14, 25, 34, 88];

function selectionSort(arr){

    for(let i = 0; i < arr.length-1; i++){
        let min = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
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
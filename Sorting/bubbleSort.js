let arr = [50, 30, 40, 55, 66, 14, 25, 34, 88];

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {

      // array show in descending order
      // if (arr[i] < arr[i + 1]) {
      //   let temp = arr[i];
      //   arr[i] = arr[i + 1];
      //   arr[i + 1] = temp;
      // }

      // array show in ascending order
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      console.log(arr);
    }
    console.log('-----------');
  }
  return arr;
}

console.log(bubbleSort(arr));

// function swap(arr, xp, yp)
// {
//     var temp = arr[xp];
//     arr[xp] = arr[yp];
//     arr[yp] = temp;
// }

// // An optimized version of Bubble Sort
// function bubbleSort( arr, n)
// {
// var i, j;
// for (i = 0; i < n-1; i++)
// {
//     for (j = 0; j < n-i-1; j++)
//     {
//         if (arr[j] > arr[j+1])
//         {
//         swap(arr,j,j+1);

//         }
//     }

// }
// }

// /* Function to print an array */
// function printArray(arr, size)
// {
//     var i;
//     for (i=0; i < size; i++)
//         console.log(arr[i]+ " ");
// }

// // Driver program to test above functions
//   var arr = [5, 1, 4, 2, 8, 7,9];
//     var n = arr.length;

//     bubbleSort(arr, n);
//     console.log("Sorted array: \n");
//     printArray(arr, n);

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    if(arr[end] <= target){
        return arr[0];
      }
    while (left <= right) {
       let mid = left + (right - left) / 2;
       if (arr[mid] <= target) {
          left ++;
       } else {
          right --;
       };
    };
    if (left == arr.length) {
       return arr[0];
    };
    return arr[left];
 };
console.log(binarySearch(["c", "f", "j"], "c"));
 // not solved0


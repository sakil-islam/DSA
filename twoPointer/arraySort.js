function twoPointerSort(array) {
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      for (let i = left; i < right; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
      }
      right--;
  
      for (let i = right; i > left; i--) {
        if (array[i - 1] > array[i]) {
          [array[i - 1], array[i]] = [array[i], array[i - 1]];
        }
      }
      left++;
    }
  
    return array;
  }
  
  const array = [7, 5, 6, 8, 3];
  console.log(twoPointerSort(array));
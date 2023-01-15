// 167. Two Sum II - Input Array Is Sorted

let arr = [2, 3, 4];
let target = 6;
let i = 0, j = arr.length - 1;
let resIndex = [];
while (i < j) {
    if ((arr[i] + arr[j]) > target) {
        j--;
    }
    else if ((arr[i] + arr[j]) < target) {
        i++;
    }
    else {
        resIndex.push(i+1);
        resIndex.push(j+1);
        i++;
        j--;
    }
}
console.log(resIndex)


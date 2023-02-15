let arr = [1, 2, 5, 10, 20, 50, 100, 500];

let target = 67;
let count = 0;

for(let i = arr.length - 1; i >= 0; i--){
    if(target == 0) break;

    while(arr[i] <= target){
        console.log(arr[i])
        target = target - arr[i];
        count++;
    }
}

console.log(count);
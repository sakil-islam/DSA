let arr = [20, 30, 40, 50, 60, 90, 64, 10];

function linearSearchRecursion(arr, key, i = 0){

    if (i == arr.length) {
        return false;
    }
    if(arr[i] == key){
        return {status: true, i}
    }

    return linearSearchRecursion(arr, key, i+1);
}

console.log(linearSearchRecursion(arr, 30));
console.log(linearSearchRecursion(arr, 70));
console.log(linearSearchRecursion(arr, 64));
console.log(linearSearchRecursion(arr, 33));
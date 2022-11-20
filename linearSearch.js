let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90, 100, 98, 87, 76, 54, 43];

let target = 45;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return 'Data found at ' + i;
        }
    }
    return 'data not found';
}

console.log(linearSearch(arr, target));
console.log(linearSearch(['red', 'green', 'blue', 'white'], 'blue'));

// 1 sec -- >  10 lakh loop chole. array size jodi 10lakh ar cheye choto hoy tobe linear search diye problem solve kora jabe.
// 10 lakh diye besi hole ata diye problem solve kora jabe na.
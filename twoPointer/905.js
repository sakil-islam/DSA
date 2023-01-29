// 905. Sort Array By Parity

var sortArrayByParity = function (nums) {
    let even = nums.filter(num => num % 2 === 0);
    console.log(even);
    let odd = nums.filter(num => num % 2 === 1);
    console.log(odd);
    let i = 0;
    let j = 0;
    let results = [];
    while (i < even.length && j < odd.length) {
        if (even.length) {
            results.push(even[i]);
            i++;
        } else {
            results.push(odd[j])
            j++
        }
    }
    while (i < even.length) {
        results.push(even[i]);
        i++;
    }
    while (j < odd.length) {
        results.push(odd[j]);
        j++;
    }
    return results
};

console.log(sortArrayByParity([3, 1, 2, 4]));
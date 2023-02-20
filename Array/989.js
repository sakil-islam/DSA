// 989. Add to Array-Form of Integer

var addToArrayForm = function (num, k) {
    let number = BigInt(num.join(''));
    let key = BigInt(k);
    console.log(number);
    let calculated = number + key;
    console.log(calculated, number, key);
    let result = calculated.toString().split('').map(Number);
    console.log(result)
    return result;
};

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516))
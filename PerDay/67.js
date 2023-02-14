// 67. Add Binary

function addBinary(a, b) {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0 || carry !== 0) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        const digitSum = digitA + digitB + carry;
        carry = digitSum >= 2 ? 1 : 0;
        result = (digitSum % 2) + result;
        i--;
        j--;
    }
    return result;
}

console.log(addBinary("01010", "01011"));
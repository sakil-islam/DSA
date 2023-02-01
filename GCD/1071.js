// 1071. Greatest Common Divisor of Strings

const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return '';
    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
    return str1.substring(0, gcd(str1.length, str2.length));
};

let str1 = "ABABAB";
let str2 = "ABAB";
let result = gcdOfStrings(str1, str2);
console.log(result);  // Output: "ABC"
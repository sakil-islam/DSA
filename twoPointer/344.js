// 344. Reverse String

var reverseString = function (s) {
    let size = s.length - 1;
    for (let i = 0, j = size; i <= j; i++, j--) {
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]))

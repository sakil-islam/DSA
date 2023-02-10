// 2000. Reverse Prefix of Word

var reversePrefix = function (word, ch) {
    let str = word.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            for (let j = 0, k = i; j <= k; j++, k--) {
                let temp = str[j];
                str[j] = str[k];
                str[k] = temp;
            }
            return str.join("")
        }
    }
    return str.join("")
};

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("abcdefd", "g"));
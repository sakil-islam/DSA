function decodeString(s) {
    const numStack = [];
    const strStack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (char === '[') {
            numStack.push(currentNum);
            strStack.push(currentStr);
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            let num = numStack.pop();
            let prevStr = strStack.pop();
            currentStr = prevStr + currentStr.repeat(num);
            console.log('-----------', currentStr, '---------');
        } else if (char >= '0' && char <= '9') {
            console.log(currentNum, '-------');

            currentNum = Number(char);

            console.log(currentNum, '=========');
        } else {
            currentStr += char;
            console.log(currentStr, '............');
        }
        console.log(numStack, ',,,,,,,,,,,');
        console.log(strStack);
    }

    return currentStr;
}

// Test cases
// console.log(decodeString("3[a]2[bc]"));     // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]"));      // Output: "accaccacc"
// console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"

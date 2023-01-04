// 20. Valid Parentheses

var isValid = function (s) {
    let validString = true;
    const openBracket = [];

    for (let value of s) {
        if (value == '[' || value == '{' || value == '(') {
            openBracket.push(value);
            continue;
        } else {
            if (!openBracket.at(-1)) {
                validString = false;
                break;
            }
            if (openBracket.at(-1) == '[' && value == ']') {
                openBracket.pop();
                continue;
            } else if (openBracket.at(-1) == '{' && value == '}') {
                openBracket.pop();
                continue;
            } else if (openBracket.at(-1) == '(' && value == ')') {
                openBracket.pop();
                continue;
            } else {
                validString = false;
                break;
            }
        }
    };
    if (openBracket.length > 0) {
        return false;
    }

    return validString;

};

console.log(isValid("()[]{"));
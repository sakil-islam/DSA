var removeStars = function (s) {
    let len = s.length;
    let result = [];
    for (let i = 0; i < len; i++) {

        if (s[i] === "*") {
            result.pop()
        } else {
            result.push(s[i]);
        }
    }
    return result.join("");
};

console.log(removeStars("leet**cod*e"));
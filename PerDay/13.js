// 13. Roman to Integer

var romanToInt = function (s) {
    const symbolValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000,
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = symbolValue[s[i]];
        const next = symbolValue[s[i + 1]];

        if (cur < next) {
            sum += next - cur;
            i++;
        } else {
            sum += cur;
        }
    }
    return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("MCMXCIV"));
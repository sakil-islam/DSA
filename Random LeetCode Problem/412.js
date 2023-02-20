// 412. Fizz Buzz

var fizzBuzz = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        }
        else if (i % 5 === 0) {
            answer.push("Buzz");
        }
        else if (i % 3 === 0) {
            answer.push("Fizz");
        }
        else {
            answer.push(i)
        }
    }
    const stringArray = answer.map((element) => {
        return String(element);
    });
    return stringArray;
};

console.log(fizzBuzz(15));
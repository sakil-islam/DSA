// 151. Reverse Words in a String

var reverseWords = function (s) {
    let extraSpaceRemove = s.split(" ");
    console.log(extraSpaceRemove);
    let logWordsContainer = extraSpaceRemove.filter(str => str.trim() !== '').join(" ");
    console.log(logWordsContainer);
    let logWords = logWordsContainer.split(" ");
    console.log(logWords);

    for (let i = 0, j = logWords.length - 1; i < j; i++, j--) {
        let storeStr = logWords[i];
        logWords[i] = logWords[j];
        logWords[j] = storeStr;
    }
    return logWords.join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
// 557. Reverse Words in a String III

var reverseWords = function (s) {
    let logWords = s.split(" ");
    let storeStr, resultArray = [], wordArr, setStr;

    for (let i = 0; i < logWords.length; i++) {

        // storeStr = logWords[i].split('').reverse().join('');

        // console.log(storeStr);
        // console.log(storeStr.length);
        // for (let j = 0, k = storeStr.length - 1; j <= k; j++, k--) {
        //     console.log('---------------');
        //     let temp = storeStr[j];
        //     storeStr[j] = storeStr[k];
        //     storeStr[k] = temp;
        //     console.log(storeStr);
        // }
        wordArr = logWords[i].split('');
        var start = 0;
        var end = wordArr.length - 1;
    
        while (start < end) {
            var temp = wordArr[start];
            wordArr[start] = wordArr[end];
            wordArr[end] = temp;
            start++;
            end--;
        }
        setStr = wordArr.join('');

        resultArray.push(setStr);
    }
    return resultArray.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));

// second accept approach 
// var reverseWords = function (s) {
//     let logWords = s.split(" ");
//     let storeStr, resultArray = [];

//     for (let i = 0; i < logWords.length; i++) {
//         storeStr = logWords[i].split('').reverse().join('');
//         resultArray.push(storeStr);
//     }
//     return resultArray.join(" ");
// };
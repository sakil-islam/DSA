// 290. Word Pattern

var wordPattern = function (pattern, s) {
    s = s.split(' ');

    if (s.length !== pattern.length) return false;

    wordToChar = new Map();
    charToWord = new Map();

    for (let i = 0; i < pattern.length; i++) {
        wordToChar.set(s[i], pattern[i]);
        charToWord.set(pattern[i], s[i]);
        console.log(wordToChar, charToWord, "inner");
    };


    for (let i = 0; i < pattern.length; i++) {
        console.log(wordToChar, charToWord, "outer");
        if (charToWord.get(pattern[i]) !== s[i] || pattern[i] !== wordToChar.get(s[i])) {
            return false;
        }
    }

    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
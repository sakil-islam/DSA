// 49. Group Anagrams

var groupAnagrams = function (strs) {
    let sorted = strs.map((str) => str.split("").sort().join(""))
    console.log(sorted);
    let object = {}
    for (let i = 0; i < sorted.length; i++) {
        if (!object[sorted[i]]) {
            object[sorted[i]] = [strs[i]]
        } else {
            object[sorted[i]].push(strs[i]);
        }
    }
    return Object.values(object);
};

console.log(groupAnagrams([""]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var arrayRankTransform = function(arr) {
    arr1 = [...arr];
    arr = [...new Set(arr)];
    arr.sort((a,b) => a-b);
    return arr1.map(x => arr.indexOf(x) + 1);
};
//console.log(arrayRankTransform([40,10,20,30,10]))
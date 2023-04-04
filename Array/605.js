// 605. Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let prev = (i === 0 || flowerbed[i - 1] === 0 ? 0 : 1)
            let next = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0 ? 0 : 1)
            if (prev === 0 && next === 0) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
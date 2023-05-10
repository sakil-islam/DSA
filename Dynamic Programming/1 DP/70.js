// 70. Climbing Stairs

var memory = new Map();

var climbStairs = function (n) {
    if (memory.get(n)) return memory.get(n);
    if (n < 3) {
        return n;
    }
    var result = climbStairs(n - 1) + climbStairs(n - 2);
    memory.set(n, result);
    return result;
};
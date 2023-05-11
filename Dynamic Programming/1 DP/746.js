// 746. Min Cost Climbing Stairs


//pass 243/283 test case
var minCostClimbingStairs1 = function (cost) {
    let costLen = cost.length;
    let i = 1;
    let sum = [];
    if (costLen === 2) {
        if (cost[i - 1] > cost[i]) {
            return cost[i];
        } else {
            return cost[i - 1];
        }
    }
    else if (costLen === 3) {
        return ((cost[i - 1] + cost[i + i]) > cost[i]) ? cost[i] : (cost[i - 1] + cost[i + i])
    } else {
        while (i < costLen) {
            if (cost[i - 1] < cost[i]) {
                sum.push(cost[i - 1]);
                i++;
            } else {
                sum.push(cost[i]);
                i = i + 2;
            }
        }
        return sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
};

console.log(minCostClimbingStairs1([10, 15, 20]));
console.log(minCostClimbingStairs1([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs1([2, 5, 3, 1, 7, 3, 4]));

// pass all
var minCostClimbingStairs = function (cost) {
    let first = cost[0]
    let second = cost[1]
    for (let i = 2; i < cost.length; i++) {
        let cur = cost[i] + Math.min(first, second)
        first = second
        second = cur
    }
    return Math.min(first, second)
}
// 1584. Min Cost to Connect All Points


var minCostConnectPoints = function (points) {
    var edges = [];
    var rank = [], parent = [];

    for (let i = 0; i < points.length; i++) {
        parent[i] = i;
        rank[i] = 1;
        for (let j = i + 1; j < points.length; j++) {
            var dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
            edges.push([dist, i, j])
        }
    }
    // console.log(edges);

    edges.sort((a, b) => { return a[0] - b[0] })
    // console.log("after sort : ", edges);

    const find = x => {
        var p = parent[x];
        console.log(p);
        if (p == parent[p]) return p;
        while (p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p]
        }
        return p;
    }

    const union = (x, y) => {
        var p1 = find(x), p2 = find(y);
        if (p1 == p2) return false;
        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
            return true
        }
        else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
            return true;
        }
    }
    var ans = 0
    for (let edge of edges) {
        if (union(edge[1], edge[2])) {
            ans += edge[0]
        }
    }
    return ans;
};

console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));
// JavaScript implementation of the krushkal's algorithm.

function makeSet(parent, rank, n) {
    for (let i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
    console.log("parent", parent, "rank", rank);
}

function findParent(parent, component) {
    if (parent[component] == component)
        return component;

    return parent[component] = findParent(parent, parent[component]);
}

function unionSet(u, v, parent, rank, n) {
    //this function unions two set on the basis of rank
    //as shown below
    u = findParent(parent, u);
    v = findParent(parent, v);

    if (rank[u] < rank[v]) {
        parent[u] = v;
    }
    else if (rank[u] < rank[v]) {
        parent[v] = u;
    }
    else {
        parent[v] = u;
        rank[u]++;//since the rank increases if the ranks of two sets are same
    }
}

function kruskalAlgo(n, edge) {
    //First we sort the edge array in ascending order
    //so that we can access minimum distances/cost
    edge.sort((a, b) => {
        return a[2] - b[2];
    })

    console.log(edge);
    //inbuilt quick sort function comes with stdlib.h
    //go to https://www.geeksforgeeks.org/comparator-function-of-qsort-in-c/
    //if there is any doubt regarding the function
    let parent = new Array(n);
    let rank = new Array(n);

    makeSet(parent, rank, n);//function to initialize parent[] and rank[]

    let minCost = 0;//to store the minimun cost

    console.log("Following are the edges in the constructed MST");
    for (let i = 0; i < n; i++) {
        let v1 = findParent(parent, edge[i][0]);
        let v2 = findParent(parent, edge[i][1]);
        let wt = edge[i][2];

        if (v1 != v2)//if the parents are different that means they are in
        //different sets so union them
        {
            unionSet(v1, v2, parent, rank, n);
            minCost += wt;
            console.log(edge[i][0] + " -- " + edge[i][1] + " == " + wt);
        }
    }

    console.log("Minimum Cost Spanning Tree:", minCost);
}


//Here 5 is the number of edges, can be asked from the user
//when making the graph through user input
//3 represents the no of index positions for storing u --> v(adjacent vertices)
//and its cost/distance;
let edge = [
    [0, 1, 10],
    [0, 2, 6],
    [0, 3, 5],
    [1, 3, 15],
    [2, 3, 4]
];

kruskalAlgo(5, edge);
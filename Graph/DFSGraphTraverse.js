class Graph {
    constructor() {
        this.graph = {};
        this.visited = {};
    }

    add(a, b) {
        //1st part
        if (this.graph[a]) {
            this.graph[a].push(b);
        }
        else {
            this.graph[a] = [b];
        }

        //2nd part
        if (this.graph[b]) {
            this.graph[b].push(a);
        }
        else {
            this.graph[b] = [a];
        }
    }
    DFS(src){
        console.log(src)
        this.visited[src] = true;
        let arr = this.graph[src];

        for(let i = 0; i < arr.length; i++){
            if(!this.visited[arr[i]]){
                this.DFS(arr[i]);
            }
        }
    }
}

let gp = new Graph();

gp.add(1, 2);
gp.add(1, 3);
gp.add(1, 4);
gp.add(2, 6);
gp.add(6, 7);
gp.add(4, 5);

console.log(gp.graph);
gp.DFS(1)
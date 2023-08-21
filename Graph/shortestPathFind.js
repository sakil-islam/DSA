class Graph {
    constructor() {
        this.graph = {};
        this.visited = {};
        this.parent = {};
    }

    add(a, b) {

        this.visited[a] = false;
        this.visited[b] = false;

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
    bfs(src) {
        let queue = [src];
        this.visited[src] = true;
        this.parent[src] = null;

        while (queue.length) {
            let data = queue[0];
            console.log(data);

            let arr = this.graph[data];
            for (let i = 0; i < arr.length; i++) {
                if(!this.visited[arr[i]]){
                    queue.push(arr[i]);
                    this.visited[arr[i]] = true;
                    this.parent[arr[i]] = data;
                }
            }
            queue.shift();

        }
    }

    spf(destination){
        console.log(destination);
        if(!this.parent[destination]){
            return;
        }
        this.spf(this.parent[destination])
    }
}

let gp = new Graph();

gp.add(1, 2);
gp.add(1, 3);
gp.add(1, 8);
gp.add(2, 4);
gp.add(3, 5);
gp.add(3, 7);
gp.add(3, 9);
gp.add(3, 10);
gp.add(8, 9);
gp.add(8, 10);
gp.add(4, 5);
gp.add(5, 6);
gp.add(6, 7);
gp.add(7, 12);
gp.add(7, 13);
gp.add(11, 12);
gp.add(11, 13);
gp.add(10, 9);
gp.add(10, 11);


console.log(gp.graph);
console.log(gp.visited);
console.log(gp.bfs(1));
console.log(gp.parent);
console.log('-----------------');
console.log(gp.spf(13));


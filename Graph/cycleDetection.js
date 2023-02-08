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

        while (queue.length) {
            let data = queue[0];
            console.log(data);

            let arr = this.graph[data];
            for (let i = 0; i < arr.length; i++) {
                if(!this.visited[arr[i]]){
                    queue.push(arr[i]);
                    this.visited[arr[i]] = true;
                }
            }
            queue.shift();

        }
    }
    cycleDetection(src) {
        let queue = [src];
        this.visited[src] = true;
        this.parent[src] = null;

        while (queue.length) {
            let data = queue[0];

            let arr = this.graph[data];
            for (let i = 0; i < arr.length; i++) {
                if(!this.visited[arr[i]]){
                    queue.push(arr[i]);
                    this.visited[arr[i]] = true;
                    this.parent[arr[i]] = data;
                }
                // visited && parent
                else if(this.visited[arr[i]] && this.parent[data] === arr[i]){
                    // nothing to do
                }
                else if(this.visited[arr[i]] && this.parent[data] !== arr[i]){
                    return 'Cycle Detected';
                }
            }
            queue.shift();

        }
        return 'Cycle Not Found';
    }
}

let gp = new Graph();

gp.add(1, 2);
gp.add(1, 3);
gp.add(2, 3);
gp.add(4, 3);
gp.add(2, 4);
gp.add(2, 5);
gp.add(4, 5);
gp.add(5, 6);

gp.add(7, 8);
gp.add(7, 9);
gp.add(8, 9);


// console.log(gp.graph);
// console.log(gp.visited);
// console.log(gp.bfs(3));

//  gp.cycleDetection(6);

console.log(gp.cycleDetection(6));
// console.log(gp.parent);
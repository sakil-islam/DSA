class Graph {
    constructor() {
        this.graph = {};
        this.visited = {};
        this.parent = {};
    }

    add(a, b, direction = false) {

        this.visited[a] = false;
        this.visited[b] = false;

        if (direction) {
            if (this.graph[a]) {
                this.graph[a].push(b);
            }
            else {
                this.graph[a] = [b];
            }
        }
        else {
            if (this.graph[b]) {
                this.graph[b].push(a);
            }
            else {
                this.graph[b] = [a];
            }
        }
    }
}

let gp = new Graph();

gp.add(1, 2, true);
gp.add(1, 3, true);
gp.add(2, 4, true);
gp.add(2, 5, true);
gp.add(3, 4, true);
gp.add(5, 6, true);
gp.add(6, 7, true);

console.log(gp.graph);
console.log(gp.visited);


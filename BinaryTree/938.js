// 938. Range Sum of BST

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(value) {
        this.root = new Node(value);
    }

    insert(value) {
        let currentNode = this.root
        while (true) {
            // large --> right
            if (currentNode.value < value) {
                if (!currentNode.right) {
                    let newNode = new Node(value);
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
            // small --> left
            else {
                if (!currentNode.left) {
                    let newNode = new Node(value);
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }
    BFS(low, high) {
        let queue = [];
        queue.push(this.root);
        let sum = 0;
        while (queue.length) {
            let current = queue[0];

            let value = current.value
            if (value >= low && value <= high) {
                sum = sum + value;
            }

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }

            queue.shift();
        }
        return sum;
    }
}

let tree = new BinaryTree(10);

tree.insert(20);
tree.insert(8);
tree.insert(9);
tree.insert(90);
tree.insert(15);

console.log(tree.BFS(10, 30));
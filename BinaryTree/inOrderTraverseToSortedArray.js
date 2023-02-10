// calculate min/ max and ceiling/ floor

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
}

function insert(value) {
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

function inOrderTraversal(root, result) {
    if (root === null) {
        return;
    }

    inOrderTraversal(root.left, result);
    result.push(root.value);
    inOrderTraversal(root.right, result);
}

function binaryTreeToArray(root) {
    let result = [];
    inOrderTraversal(root, result);
    return result;
}

let bst = new BinaryTree(10);
insert.call(bst, 5);
insert.call(bst, 15);
insert.call(bst, 3);
insert.call(bst, 7);
insert.call(bst, 12);
insert.call(bst, 20);

console.log(bst);
console.log(binaryTreeToArray(bst.root));
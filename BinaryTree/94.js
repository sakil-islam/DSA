// 94. Binary Tree In order Traversal

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
    // insert(value) {
    //     let currentNode = this.root;
    //     while (true) {
    //         if (currentNode.value < value) {
    //             if (!currentNode.right) {
    //                 let newNode = new Node(value);
    //                 currentNode.right = newNode;
    //                 break;
    //             }
    //             currentNode = currentNode.right;
    //         }
    //         else {
    //             if (!currentNode.left) {
    //                 let newNode = new Node(value);
    //                 currentNode.left = newNode;
    //                 break;
    //             }
    //             currentNode = currentNode.left;
    //         }
    //     }
    // }
    // inOrder(value) {
    //     if (value.left) {
    //         this.inOrder(value.left);
    //     }
    //     console.log(value.value);
    //     if (value.right) {
    //         this.inOrder(value.right);
    //     }
    // }
}

function insert(value) {
    let currentNode = this.root;
    while (true) {
        if (currentNode.value < value) {
            if (!currentNode.right) {
                let newNode = new Node(value);
                currentNode.right = newNode;
                break;
            }
            currentNode = currentNode.right;
        }
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
    if (root.left) {
        inOrderTraversal(root.left);
    }
    console.log(root.value)
    // result.push(root.value);
    if (root.right) {
        inOrderTraversal(root.right);
    }
}

function binaryTreeToArray(root) {
    let result = [];
    inOrderTraversal(root, result);
    return result;
}

let dfs = new BinaryTree(1);

insert.call(dfs, 2);
insert.call(dfs, 3);

console.log(dfs);
console.log(binaryTreeToArray(dfs.root));
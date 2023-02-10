// 230. Kth Smallest Element in a BST

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

// let bst = new BinaryTree(5);
let bst = new BinaryTree(3);
insert.call(bst, 1);
insert.call(bst, 4);
insert.call(bst, 2);
// insert.call(bst, 3);
// insert.call(bst, 6);
// insert.call(bst, 2);
// insert.call(bst, 4);
// insert.call(bst, 1);
let nums = binaryTreeToArray(bst.root);
console.log(nums);

var twoSum = function (nums, target) {
    return nums[target - 1];
}

// console.log(twoSum(nums, 3));
console.log(twoSum(nums, 1));

// leet code accepted ans

// var kthSmallest = function(root, k) {
//     let nums = binaryTreeToArray(root);
//     console.log(nums);
//     return nums[k-1];
// };
// function inOrderTraversal(root, result) {
//     if (root === null) {
//         return;
//     }

//     inOrderTraversal(root.left, result);
//     result.push(root.val);
//     inOrderTraversal(root.right, result);
// }

// function binaryTreeToArray(root) {
//     let result = [];
//     inOrderTraversal(root, result);
//     return result;
// }
// 653. Two Sum IV - Input is a BST

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

let bst = new BinaryTree(5);
insert.call(bst, 3);
insert.call(bst, 6);
insert.call(bst, 2);
insert.call(bst, 4);
insert.call(bst, null);
insert.call(bst, 7);
let nums = binaryTreeToArray(bst.root);

console.log(bst);
console.log(nums);

var twoSum = function (nums, target) {
    // let nums = binaryTreeToArray(root);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let getValue = nums[i] + nums[j];
            if (getValue === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum(nums, 9));

// leet code accepted ans

// var findTarget = function(root, target) {
//     let nums = binaryTreeToArray(root);
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             let getValue = nums[i] + nums[j];
//             if (getValue === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
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


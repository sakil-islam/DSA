// TreeNode class to represent each node in the binary tree
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// Function to find leaf nodes in a binary tree
function findLeafNodes(root, result) {
    if (root === null) {
        return;
    }

    if (root.left === null && root.right === null) {
        result.push(root.val);
        return;
    }

    findLeafNodes(root.left, result);
    findLeafNodes(root.right, result);
}

// Create a binary tree from the given array
function createTreeFromArray(arr, index) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const node = new TreeNode(arr[index]);
    node.left = createTreeFromArray(arr, 2 * index + 1);
    node.right = createTreeFromArray(arr, 2 * index + 2);

    return node;
}

// Example usage
const arr = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
const root = createTreeFromArray(arr, 0);
const leafNodes = [];

findLeafNodes(root, leafNodes);
console.log(leafNodes); // Output: [6, 7, 4]

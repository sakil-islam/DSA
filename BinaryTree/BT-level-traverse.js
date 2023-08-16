class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function levelOrder(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelData = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelData.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(levelData);
    }

    return result;
}

// Example usage
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.left.left = new TreeNode(15);
root.left.right = new TreeNode(7);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const levelWiseData = levelOrder(root);
console.log(levelWiseData);

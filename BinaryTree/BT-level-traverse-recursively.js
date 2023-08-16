class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function averageOfLevels(root) {
    const levelSums = [];
    const levelCounts = [];

    traverse(root, 0, levelSums, levelCounts);

    const result = [];
    for (let i = 0; i < levelSums.length; i++) {
        result.push((levelSums[i] / levelCounts[i]).toFixed(5));
    }

    return result;
}

function traverse(node, level, levelSums, levelCounts) {
    if (node === null) {
        return;
    }

    if (levelSums[level] === undefined) {
        levelSums[level] = 0;
        levelCounts[level] = 0;
    }

    levelSums[level] += node.val;
    levelCounts[level]++;

    traverse(node.left, level + 1, levelSums, levelCounts);
    traverse(node.right, level + 1, levelSums, levelCounts);
}

// Constructing the binary tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode(15);
root.left.right = new TreeNode(7);

// Calling the averageOfLevels function
const averageLevels = averageOfLevels(root);
console.log(averageLevels);

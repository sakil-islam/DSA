var getMinimumDifference = function (root) {
    let result = [];
    let minDiff = Infinity;

    inOrderTraversal(root, result);

    for (let i = 1; i < result.length; i++) {
        const diff = result[i] - result[i - 1];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};

function inOrderTraversal(root, result) {
    if (root === null) {
        return;
    }

    inOrderTraversal(root.left, result);
    result.push(root.val);
    inOrderTraversal(root.right, result);
}
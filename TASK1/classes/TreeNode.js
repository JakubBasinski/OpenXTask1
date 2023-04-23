class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const countLeaves = (root) => {
  if (root === null) return 0;
  if (root.right === null && root.left === null) return 1;
  const leftLeaves = countLeaves(root.left);
  const rightLeaves = countLeaves(root.right);
  return leftLeaves + rightLeaves;
};

const calculateNodeHeight = (root) => {
  if (root === null) {
    return 0;
  } else {
    const leftHeight = calculateNodeHeight(root.left);
    const rightHeight = calculateNodeHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};

const calculateLongestPath = (root) => {
  if (root === null) return 0;
  return calculateNodeHeight(root) - 1;
};

const compareTrees = (root1, root2) => {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;

  return (
    root1.value === root2.value &&
    compareTrees(root1.left, root2.left) &&
    compareTrees(root1.right, root2.right)
  );
};

module.exports = {
  TreeNode,
  countLeaves,
  calculateNodeHeight,
  calculateLongestPath,
  compareTrees
};

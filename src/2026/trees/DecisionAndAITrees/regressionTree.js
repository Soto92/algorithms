class RegressionTreeNode {
  constructor(feature = null, threshold = null, value = null) {
    this.feature = feature;
    this.threshold = threshold;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class RegressionTree {
  constructor(root = null) {
    this.root = root;
  }

  predict(input, node = this.root) {
    if (!node) return null;
    if (node.value !== null) return node.value;
    return this.predict(input[node.feature] <= node.threshold ? node.left : node.right);
  }
}

module.exports = { RegressionTree, RegressionTreeNode };

class ClassificationTreeNode {
  constructor(feature = null, threshold = null, label = null) {
    this.feature = feature;
    this.threshold = threshold;
    this.label = label;
    this.left = null;
    this.right = null;
  }
}

class ClassificationTree {
  constructor(root = null) {
    this.root = root;
  }

  predict(input, node = this.root) {
    if (!node) return null;
    if (node.label !== null) return node.label;
    return this.predict(input[node.feature] <= node.threshold ? node.left : node.right);
  }
}

module.exports = { ClassificationTree, ClassificationTreeNode };

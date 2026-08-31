class ExtraTrees {
  constructor(trees = []) {
    this.trees = trees;
  }

  addTree(tree) {
    this.trees.push(tree);
  }

  predict(input) {
    if (this.trees.length === 0) return null;
    const predictions = this.trees.map((tree) => tree.predict(input));
    return predictions.reduce((sum, value) => sum + value, 0) / predictions.length;
  }
}

module.exports = { ExtraTrees };

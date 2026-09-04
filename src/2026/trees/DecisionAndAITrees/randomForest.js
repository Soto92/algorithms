class RandomForest {
  constructor(trees = []) {
    this.trees = trees;
  }

  addTree(tree) {
    this.trees.push(tree);
  }

  predict(input) {
    const votes = new Map();

    for (const tree of this.trees) {
      const prediction = tree.predict(input);
      votes.set(prediction, (votes.get(prediction) || 0) + 1);
    }

    return [...votes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  }
}

module.exports = { RandomForest };

class GradientBoostedTrees {
  constructor(learningRate = 0.1) {
    this.learningRate = learningRate;
    this.trees = [];
    this.initialValue = 0;
  }

  addTree(tree) {
    this.trees.push(tree);
  }

  predict(input) {
    return this.trees.reduce((sum, tree) => sum + this.learningRate * tree.predict(input), this.initialValue);
  }
}

module.exports = { GradientBoostedTrees };

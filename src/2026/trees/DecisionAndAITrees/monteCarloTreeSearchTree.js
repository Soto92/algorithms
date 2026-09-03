class MonteCarloTreeSearchNode {
  constructor(state, parent = null) {
    this.state = state;
    this.parent = parent;
    this.children = [];
    this.visits = 0;
    this.wins = 0;
  }

  score(exploration = Math.SQRT2) {
    if (this.visits === 0) return Infinity;
    return this.wins / this.visits + exploration * Math.sqrt(Math.log(this.parent.visits) / this.visits);
  }

  addChild(state) {
    const child = new MonteCarloTreeSearchNode(state, this);
    this.children.push(child);
    return child;
  }
}

class MonteCarloTreeSearchTree {
  constructor(rootState) {
    this.root = new MonteCarloTreeSearchNode(rootState);
  }

  bestChild(node = this.root) {
    return node.children.reduce((best, child) => child.score() > best.score() ? child : best, node.children[0]);
  }

  backpropagate(node, result) {
    while (node) {
      node.visits++;
      node.wins += result;
      node = node.parent;
    }
  }
}

module.exports = { MonteCarloTreeSearchTree, MonteCarloTreeSearchNode };

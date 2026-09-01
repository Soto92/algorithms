class GameTreeNode {
  constructor(state, children = []) {
    this.state = state;
    this.children = children;
  }

  addChild(state) {
    const child = new GameTreeNode(state);
    this.children.push(child);
    return child;
  }
}

class GameTree {
  constructor(rootState) {
    this.root = new GameTreeNode(rootState);
  }

  traverse(callback, node = this.root) {
    callback(node.state);
    for (const child of node.children) this.traverse(callback, child);
  }
}

module.exports = { GameTree, GameTreeNode };

class MinimaxTree {
  evaluate(node, maximizing = true) {
    if (!node.children || node.children.length === 0) return node.value;

    const values = node.children.map((child) => this.evaluate(child, !maximizing));
    return maximizing ? Math.max(...values) : Math.min(...values);
  }
}

module.exports = { MinimaxTree };

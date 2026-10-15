class ExpressionTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class ExpressionTree {
  constructor(root = null) {
    this.root = root;
  }

  evaluate(node = this.root) {
    if (!node.left && !node.right) return Number(node.value);
    const left = this.evaluate(node.left);
    const right = this.evaluate(node.right);
    if (node.value === "+") return left + right;
    if (node.value === "-") return left - right;
    if (node.value === "*") return left * right;
    if (node.value === "/") return left / right;
    throw new Error("Unknown operator");
  }
}

module.exports = { ExpressionTree, ExpressionTreeNode };

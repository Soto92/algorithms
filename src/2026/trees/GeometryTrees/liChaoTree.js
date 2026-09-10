class LiChaoLine {
  constructor(slope, intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  valueAt(x) {
    return this.slope * x + this.intercept;
  }
}

class LiChaoTreeNode {
  constructor(line = null) {
    this.line = line;
    this.left = null;
    this.right = null;
  }
}

class LiChaoTree {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    this.root = null;
  }

  addLine(slope, intercept) {
    const line = new LiChaoLine(slope, intercept);
    this.root = this.add(this.root, this.left, this.right, line);
  }

  add(node, left, right, line) {
    if (!node) return new LiChaoTreeNode(line);

    const middle = Math.floor((left + right) / 2);
    const leftBetter = line.valueAt(left) < node.line.valueAt(left);
    const middleBetter = line.valueAt(middle) < node.line.valueAt(middle);

    if (middleBetter) {
      const old = node.line;
      node.line = line;
      line = old;
    }

    if (left === right) return node;
    if (leftBetter !== middleBetter) node.left = this.add(node.left, left, middle, line);
    else node.right = this.add(node.right, middle + 1, right, line);
    return node;
  }

  query(x, node = this.root, left = this.left, right = this.right) {
    if (!node) return Infinity;

    const current = node.line.valueAt(x);
    if (left === right) return current;

    const middle = Math.floor((left + right) / 2);
    const child = x <= middle ? this.query(x, node.left, left, middle) : this.query(x, node.right, middle + 1, right);
    return Math.min(current, child);
  }
}

module.exports = { LiChaoTree, LiChaoTreeNode, LiChaoLine };

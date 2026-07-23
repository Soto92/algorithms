class CartesianTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class CartesianTree {
  constructor(values = []) {
    this.root = null;
    if (values.length) this.root = this.build(values);
  }

  build(values) {
    const stack = [];

    for (const value of values) {
      const node = new CartesianTreeNode(value);
      let last = null;

      while (stack.length && stack[stack.length - 1].value > value) {
        last = stack.pop();
      }

      if (stack.length) {
        stack[stack.length - 1].right = node;
        node.parent = stack[stack.length - 1];
      }

      if (last) {
        node.left = last;
        last.parent = node;
      }

      stack.push(node);
    }

    return stack[0] || null;
  }
}

module.exports = { CartesianTree, CartesianTreeNode };

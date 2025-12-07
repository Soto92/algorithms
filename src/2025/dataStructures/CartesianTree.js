class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class CartesianTree {
  constructor(data) {
    this.root = this.build(data);
  }

  build(data) {
    if (!data || data.length === 0) {
      return null;
    }

    const stack = [];
    for (const val of data) {
      let last = null;
      while (stack.length > 0 && stack[stack.length - 1].data > val) {
        last = stack.pop();
      }
      const newNode = new Node(val);
      if (last) newNode.left = last;
      if (stack.length > 0) stack[stack.length - 1].right = newNode;
      stack.push(newNode);
    }
    return stack[0];
  }
}

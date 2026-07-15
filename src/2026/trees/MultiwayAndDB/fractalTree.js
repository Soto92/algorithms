class FractalTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.buffer = [];
    this.leaf = leaf;
  }
}

class FractalTree {
  constructor(order = 4, bufferLimit = 4) {
    this.order = order;
    this.bufferLimit = bufferLimit;
    this.root = new FractalTreeNode(true);
  }

  insert(key, value) {
    this.root.buffer.push({ key, value });
    if (this.root.buffer.length >= this.bufferLimit) {
      this.flush(this.root);
    }
  }

  flush(node) {
    while (node.buffer.length) {
      const entry = node.buffer.shift();

      if (node.leaf) {
        let index = 0;
        while (index < node.keys.length && entry.key > node.keys[index].key) index++;
        node.keys.splice(index, 0, entry);
      } else {
        let index = 0;
        while (index < node.keys.length && entry.key > node.keys[index]) index++;
        node.children[index].buffer.push(entry);
        if (node.children[index].buffer.length >= this.bufferLimit) this.flush(node.children[index]);
      }
    }
  }

  search(key, node = this.root) {
    for (let i = node.buffer.length - 1; i >= 0; i--) {
      if (node.buffer[i].key === key) return node.buffer[i].value;
    }

    if (node.leaf) {
      const entry = node.keys.find((item) => item.key === key);
      return entry ? entry.value : null;
    }

    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) index++;
    return this.search(key, node.children[index]);
  }
}

module.exports = { FractalTree, FractalTreeNode };

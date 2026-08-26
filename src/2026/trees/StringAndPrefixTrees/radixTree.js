class RadixTreeNode {
  constructor(edge = "") {
    this.edge = edge;
    this.children = new Map();
    this.value = null;
  }
}

class RadixTree {
  constructor() {
    this.root = new RadixTreeNode();
  }

  prefixLength(first, second) {
    let index = 0;
    while (index < first.length && index < second.length && first[index] === second[index]) index++;
    return index;
  }

  set(key, value) {
    this.setAt(this.root, key, value);
  }

  setAt(node, key, value) {
    if (!key) {
      node.value = value;
      return;
    }

    const child = node.children.get(key[0]);

    if (!child) {
      const next = new RadixTreeNode(key);
      next.value = value;
      node.children.set(key[0], next);
      return;
    }

    const length = this.prefixLength(key, child.edge);

    if (length === child.edge.length) {
      this.setAt(child, key.slice(length), value);
      return;
    }

    const split = new RadixTreeNode(child.edge.slice(0, length));
    child.edge = child.edge.slice(length);
    split.children.set(child.edge[0], child);
    node.children.set(split.edge[0], split);

    if (length === key.length) split.value = value;
    else {
      const leaf = new RadixTreeNode(key.slice(length));
      leaf.value = value;
      split.children.set(leaf.edge[0], leaf);
    }
  }

  get(key) {
    let node = this.root;
    let text = key;

    while (text.length) {
      const child = node.children.get(text[0]);
      if (!child || !text.startsWith(child.edge)) return null;
      text = text.slice(child.edge.length);
      node = child;
    }

    return node.value;
  }
}

module.exports = { RadixTree, RadixTreeNode };

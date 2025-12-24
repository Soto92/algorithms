class Node {
  constructor() {
    this.keys = [];
    this.children = [];
  }

  isLeaf() {
    return this.children.length === 0;
  }

  isFull() {
    return this.keys.length === 2;
  }
}

class TwoThreeTree {
  constructor() {
    this.root = new Node();
  }

  insert(key) {
    if (this.root.keys.length === 0) {
      this.root.keys.push(key);
      return;
    }
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node.isLeaf()) {
      node.keys.push(key);
      node.keys.sort((a, b) => a - b);
    } else {
      let childIndex = 0;
      while (childIndex < node.keys.length && key > node.keys[childIndex]) {
        childIndex++;
      }
      const child = this.insertNode(node.children[childIndex], key);
      if (child.isFull()) {
        this.split(node, childIndex);
      }
    }
    return node.isFull() ? this.split(node) : node;
  }

  split(node, childIndex) {
    if (childIndex !== undefined) {
      const child = node.children[childIndex];
      node.keys.splice(childIndex, 0, child.keys[1]);
      const newChild = new Node();
      newChild.keys.push(child.keys[2]);
      node.children.splice(childIndex + 1, 0, newChild);
      child.keys.length = 1;
      if (!child.isLeaf()) {
        newChild.children.push(child.children.pop());
      }
    } else {
      const newRoot = new Node();
      newRoot.keys.push(node.keys[1]);
      const newLeft = new Node();
      newLeft.keys.push(node.keys[0]);
      const newRight = new Node();
      newRight.keys.push(node.keys[2]);
      newRoot.children.push(newLeft, newRight);
      if (!node.isLeaf()) {
        newLeft.children.push(node.children[0], node.children[1]);
        newRight.children.push(node.children[2], node.children[3]);
      }
      return newRoot;
    }
  }

  search(key) {
    let current = this.root;
    return false;
  }
}

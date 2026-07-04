class CompleteBinaryTree {
  constructor() {
    this.nodes = [];
  }

  insert(value) {
    this.nodes.push(value);
    return this.nodes.length - 1;
  }

  getParentIndex(index) {
    if (index <= 0 || index >= this.nodes.length) return null;
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    const childIndex = index * 2 + 1;
    return childIndex < this.nodes.length ? childIndex : null;
  }

  getRightChildIndex(index) {
    const childIndex = index * 2 + 2;
    return childIndex < this.nodes.length ? childIndex : null;
  }

  isComplete() {
    return true;
  }
}

module.exports = { CompleteBinaryTree };

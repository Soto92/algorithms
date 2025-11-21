class FibonacciHeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.parent = null;
    this.child = null;
    this.left = this;
    this.right = this;
    this.degree = 0;
    this.marked = false;
  }
}

class FibonacciHeap {
  constructor() {
    this.minNode = null;
    this.nodeCount = 0;
  }

  isEmpty() {
    return this.minNode === null;
  }

  insert(key, value) {
    const node = new FibonacciHeapNode(key, value);
    if (this.minNode === null) {
      this.minNode = node;
    } else {
      this._mergeWithRootList(node);
      if (node.key < this.minNode.key) {
        this.minNode = node;
      }
    }
    this.nodeCount++;
    return node;
  }

  extractMin() {
    const z = this.minNode;
    if (z !== null) {
      if (z.child !== null) {
        let child = z.child;
        do {
          child.parent = null;
          child = child.right;
        } while (child !== z.child);
        this._mergeWithRootList(z.child);
      }
      this._removeFromRootList(z);
      if (z === z.right) {
        this.minNode = null;
      } else {
        this.minNode = z.right;
        this._consolidate();
      }
      this.nodeCount--;
    }
    return z;
  }

  _consolidate() {
    const A = new Array(Math.floor(Math.log2(this.nodeCount)) + 2).fill(null);
    let w = this.minNode;
    const rootList = [];
    if (w) {
      let current = w;
      do {
        rootList.push(current);
        current = current.right;
      } while (current !== w);
    }

    for (let i = 0; i < rootList.length; i++) {
      let x = rootList[i];
      let d = x.degree;
      while (A[d] !== null) {
        let y = A[d];
        if (x.key > y.key) {
          [x, y] = [y, x];
        }
        this._link(y, x);
        A[d] = null;
        d++;
      }
      A[d] = x;
    }

    this.minNode = null;
    for (const node of A) {
      if (node !== null) {
        if (this.minNode === null) {
          this.minNode = node;
          node.left = node;
          node.right = node;
        } else {
          this._mergeWithRootList(node);
          if (node.key < this.minNode.key) {
            this.minNode = node;
          }
        }
      }
    }
  }

  _link(y, x) {
    this._removeFromRootList(y);
    y.parent = x;
    if (x.child === null) {
      x.child = y;
      y.right = y;
      y.left = y;
    } else {
      y.left = x.child;
      y.right = x.child.right;
      x.child.right.left = y;
      x.child.right = y;
    }
    x.degree++;
    y.marked = false;
  }

  _mergeWithRootList(node) {
    if (this.minNode === null) {
      this.minNode = node;
    } else {
      node.right = this.minNode.right;
      node.left = this.minNode;
      this.minNode.right.left = node;
      this.minNode.right = node;
    }
  }

  _removeFromRootList(node) {
    node.left.right = node.right;
    node.right.left = node.left;
  }
}

class BTreeNode {
  constructor(t, leaf) {
    this.t = t;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  traverse() {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      if (!this.leaf) {
        this.children[i].traverse();
      }
    }
    if (!this.leaf) {
      this.children[i].traverse();
    }
  }

  search(k) {
    let i = 0;
    while (i < this.keys.length && k > this.keys[i]) {
      i++;
    }
    if (this.keys[i] === k) {
      return this;
    }
    if (this.leaf) {
      return null;
    }
    return this.children[i].search(k);
  }

  splitChild(i, y) {
    const z = new BTreeNode(y.t, y.leaf);
    z.keys = y.keys.splice(this.t, y.keys.length - this.t);
    if (!y.leaf) {
      z.children = y.children.splice(this.t, y.children.length - this.t);
    }
    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, y.keys.pop());
  }

  insertNonFull(k) {
    let i = this.keys.length - 1;
    if (this.leaf) {
      while (i >= 0 && this.keys[i] > k) {
        i--;
      }
      this.keys.splice(i + 1, 0, k);
    } else {
      while (i >= 0 && this.keys[i] > k) {
        i--;
      }
      i++;
      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i, this.children[i]);
        if (this.keys[i] < k) {
          i++;
        }
      }
      this.children[i].insertNonFull(k);
    }
  }
}

class BTree {
  constructor(t) {
    this.root = null;
    this.t = t;
  }

  traverse() {
    if (this.root !== null) {
      this.root.traverse();
    }
  }

  search(k) {
    return this.root === null ? null : this.root.search(k);
  }

  insert(k) {
    if (this.root === null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys[0] = k;
    } else {
      if (this.root.keys.length === 2 * this.t - 1) {
        const s = new BTreeNode(this.t, false);
        s.children[0] = this.root;
        s.splitChild(0, this.root);
        let i = 0;
        if (s.keys[0] < k) {
          i++;
        }
        s.children[i].insertNonFull(k);
        this.root = s;
      } else {
        this.root.insertNonFull(k);
      }
    }
  }
}

class LazySegmentTree {
  constructor(values = []) {
    this.size = values.length;
    this.tree = Array(this.size * 4).fill(0);
    this.lazy = Array(this.size * 4).fill(0);
    if (this.size) this.build(values, 1, 0, this.size - 1);
  }

  build(values, node, left, right) {
    if (left === right) {
      this.tree[node] = values[left];
      return;
    }

    const middle = Math.floor((left + right) / 2);
    this.build(values, node * 2, left, middle);
    this.build(values, node * 2 + 1, middle + 1, right);
    this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
  }

  push(node, left, right) {
    if (this.lazy[node] === 0) return;

    this.tree[node] += (right - left + 1) * this.lazy[node];

    if (left !== right) {
      this.lazy[node * 2] += this.lazy[node];
      this.lazy[node * 2 + 1] += this.lazy[node];
    }

    this.lazy[node] = 0;
  }

  update(start, end, value, node = 1, left = 0, right = this.size - 1) {
    this.push(node, left, right);
    if (start > right || end < left) return;

    if (start <= left && right <= end) {
      this.lazy[node] += value;
      this.push(node, left, right);
      return;
    }

    const middle = Math.floor((left + right) / 2);
    this.update(start, end, value, node * 2, left, middle);
    this.update(start, end, value, node * 2 + 1, middle + 1, right);
    this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
  }

  query(start, end, node = 1, left = 0, right = this.size - 1) {
    this.push(node, left, right);
    if (start > right || end < left) return 0;
    if (start <= left && right <= end) return this.tree[node];

    const middle = Math.floor((left + right) / 2);
    return this.query(start, end, node * 2, left, middle) + this.query(start, end, node * 2 + 1, middle + 1, right);
  }
}

module.exports = { LazySegmentTree };

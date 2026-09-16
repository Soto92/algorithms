class SegmentTree {
  constructor(values = []) {
    this.size = values.length;
    this.tree = Array(this.size * 4).fill(0);
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

  query(start, end, node = 1, left = 0, right = this.size - 1) {
    if (start > right || end < left) return 0;
    if (start <= left && right <= end) return this.tree[node];

    const middle = Math.floor((left + right) / 2);
    return this.query(start, end, node * 2, left, middle) + this.query(start, end, node * 2 + 1, middle + 1, right);
  }

  update(index, value, node = 1, left = 0, right = this.size - 1) {
    if (left === right) {
      this.tree[node] = value;
      return;
    }

    const middle = Math.floor((left + right) / 2);
    if (index <= middle) this.update(index, value, node * 2, left, middle);
    else this.update(index, value, node * 2 + 1, middle + 1, right);
    this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
  }
}

module.exports = { SegmentTree };

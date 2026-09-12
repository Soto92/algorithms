class MergeSortTree {
  constructor(values = []) {
    this.size = values.length;
    this.tree = Array.from({ length: this.size * 4 }, () => []);
    if (this.size) this.build(values, 1, 0, this.size - 1);
  }

  build(values, node, left, right) {
    if (left === right) {
      this.tree[node] = [values[left]];
      return;
    }

    const middle = Math.floor((left + right) / 2);
    this.build(values, node * 2, left, middle);
    this.build(values, node * 2 + 1, middle + 1, right);
    this.tree[node] = this.merge(this.tree[node * 2], this.tree[node * 2 + 1]);
  }

  merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length || j < right.length) {
      if (j === right.length || left[i] <= right[j]) result.push(left[i++]);
      else result.push(right[j++]);
    }

    return result;
  }

  countLessOrEqual(start, end, value, node = 1, left = 0, right = this.size - 1) {
    if (start > right || end < left) return 0;
    if (start <= left && right <= end) return this.upperBound(this.tree[node], value);

    const middle = Math.floor((left + right) / 2);
    return this.countLessOrEqual(start, end, value, node * 2, left, middle) + this.countLessOrEqual(start, end, value, node * 2 + 1, middle + 1, right);
  }

  upperBound(array, value) {
    let left = 0;
    let right = array.length;

    while (left < right) {
      const middle = Math.floor((left + right) / 2);
      if (array[middle] <= value) left = middle + 1;
      else right = middle;
    }

    return left;
  }
}

module.exports = { MergeSortTree };

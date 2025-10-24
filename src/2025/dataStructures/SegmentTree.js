class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n);
    this.build(arr);
  }

  build(arr) {
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1];
    }
  }

  update(index, value) {
    index += this.n;
    this.tree[index] = value;
    while (index > 1) {
      index = Math.floor(index / 2);
      this.tree[index] = this.tree[2 * index] + this.tree[2 * index + 1];
    }
  }

  query(left, right) {
    let result = 0;
    left += this.n;
    right += this.n;

    while (left < right) {
      if (left % 2 === 1) {
        result += this.tree[left];
        left++;
      }
      if (right % 2 === 1) {
        right--;
        result += this.tree[right];
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }
    return result;
  }
}

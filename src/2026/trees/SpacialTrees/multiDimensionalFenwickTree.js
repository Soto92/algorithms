class MultiDimensionalFenwickTree {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.tree = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  }

  add(row, col, delta) {
    for (let x = row + 1; x <= this.rows; x += x & -x) {
      for (let y = col + 1; y <= this.cols; y += y & -y) {
        this.tree[x][y] += delta;
      }
    }
  }

  prefixSum(row, col) {
    let sum = 0;
    for (let x = row + 1; x > 0; x -= x & -x) {
      for (let y = col + 1; y > 0; y -= y & -y) {
        sum += this.tree[x][y];
      }
    }
    return sum;
  }

  rangeSum(row1, col1, row2, col2) {
    return this.prefixSum(row2, col2) - this.prefixSum(row1 - 1, col2) - this.prefixSum(row2, col1 - 1) + this.prefixSum(row1 - 1, col1 - 1);
  }
}

module.exports = { MultiDimensionalFenwickTree };

class MultiDimensionalSegmentTree {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0] ? matrix[0].length : 0;
    this.tree = Array.from({ length: this.rows * 4 }, () => Array(this.cols * 4).fill(0));
    if (this.rows && this.cols) this.buildX(1, 0, this.rows - 1);
  }

  buildX(nodeX, leftX, rightX) {
    if (leftX !== rightX) {
      const middleX = Math.floor((leftX + rightX) / 2);
      this.buildX(nodeX * 2, leftX, middleX);
      this.buildX(nodeX * 2 + 1, middleX + 1, rightX);
    }
    this.buildY(nodeX, leftX, rightX, 1, 0, this.cols - 1);
  }

  buildY(nodeX, leftX, rightX, nodeY, leftY, rightY) {
    if (leftY === rightY) {
      this.tree[nodeX][nodeY] = leftX === rightX ? this.matrix[leftX][leftY] : this.tree[nodeX * 2][nodeY] + this.tree[nodeX * 2 + 1][nodeY];
      return;
    }
    const middleY = Math.floor((leftY + rightY) / 2);
    this.buildY(nodeX, leftX, rightX, nodeY * 2, leftY, middleY);
    this.buildY(nodeX, leftX, rightX, nodeY * 2 + 1, middleY + 1, rightY);
    this.tree[nodeX][nodeY] = this.tree[nodeX][nodeY * 2] + this.tree[nodeX][nodeY * 2 + 1];
  }
}

module.exports = { MultiDimensionalSegmentTree };

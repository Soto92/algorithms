class Node {
  constructor(col) {
    this.left = this;
    this.right = this;
    this.up = this;
    this.down = this;
    this.col = col;
  }
}

class ColumnNode extends Node {
  constructor(name) {
    super(null);
    this.name = name;
    this.size = 0;
    this.col = this;
  }
}

class DancingLinks {
  constructor(matrix) {
    this.header = new ColumnNode("header");
    this.build(matrix);
  }

  build(matrix) {
    const columns = [];
    for (let i = 0; i < matrix[0].length; i++) {
      const colNode = new ColumnNode(i);
      columns.push(colNode);
      this.header.left.right = colNode;
      colNode.left = this.header.left;
      colNode.right = this.header;
      this.header.left = colNode;
    }

    for (let r = 0; r < matrix.length; r++) {
      let firstNode = null;
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] === 1) {
          const col = columns[c];
          const newNode = new Node(col);
          newNode.up = col.up;
          newNode.down = col;
          col.up.down = newNode;
          col.up = newNode;
          col.size++;

          if (firstNode) {
            newNode.left = firstNode.left;
            newNode.right = firstNode;
            firstNode.left.right = newNode;
            firstNode.left = newNode;
          } else {
            firstNode = newNode;
          }
        }
      }
    }
  }

  cover(c) {
    c.right.left = c.left;
    c.left.right = c.right;
    for (let i = c.down; i !== c; i = i.down) {
      for (let j = i.right; j !== i; j = j.right) {
        j.down.up = j.up;
        j.up.down = j.down;
        j.col.size--;
      }
    }
  }

  uncover(c) {
    for (let i = c.up; i !== c; i = i.up) {
      for (let j = i.left; j !== i; j = j.left) {
        j.col.size++;
        j.down.up = j;
        j.up.down = j;
      }
    }
    c.right.left = c;
    c.left.right = c;
  }
}

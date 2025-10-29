class DisjointSet {
  constructor() {
    this.parent = {};
  }

  makeSet(x) {
    this.parent[x] = x;
  }

  find(x) {
    if (this.parent[x] === x) {
      return x;
    }
    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootY] = rootX;
    }
  }
}

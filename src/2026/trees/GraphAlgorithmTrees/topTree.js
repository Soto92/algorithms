class TopTreeCluster {
  constructor(leftBoundary, rightBoundary) {
    this.leftBoundary = leftBoundary;
    this.rightBoundary = rightBoundary;
    this.children = [];
  }
}

class TopTree {
  constructor() {
    this.clusters = [];
  }

  makeCluster(leftBoundary, rightBoundary) {
    const cluster = new TopTreeCluster(leftBoundary, rightBoundary);
    this.clusters.push(cluster);
    return cluster;
  }

  join(first, second) {
    const cluster = new TopTreeCluster(first.leftBoundary, second.rightBoundary);
    cluster.children = [first, second];
    this.clusters.push(cluster);
    return cluster;
  }

  split(cluster) {
    return cluster.children;
  }
}

module.exports = { TopTree, TopTreeCluster };

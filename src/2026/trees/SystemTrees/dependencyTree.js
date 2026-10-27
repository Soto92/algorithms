class DependencyTreeNode {
  constructor(name) {
    this.name = name;
    this.dependencies = [];
  }

  addDependency(name) {
    const dependency = new DependencyTreeNode(name);
    this.dependencies.push(dependency);
    return dependency;
  }
}

class DependencyTree {
  constructor(rootName) {
    this.root = new DependencyTreeNode(rootName);
  }

  resolve(node = this.root, result = []) {
    for (const dependency of node.dependencies) this.resolve(dependency, result);
    result.push(node.name);
    return result;
  }
}

module.exports = { DependencyTree, DependencyTreeNode };

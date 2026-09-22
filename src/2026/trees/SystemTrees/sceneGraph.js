class SceneGraphNode {
  constructor(name, transform = {}) {
    this.name = name;
    this.transform = transform;
    this.children = [];
  }

  addChild(name, transform = {}) {
    const child = new SceneGraphNode(name, transform);
    this.children.push(child);
    return child;
  }
}

class SceneGraph {
  constructor(rootName = "scene") {
    this.root = new SceneGraphNode(rootName);
  }
}

module.exports = { SceneGraph, SceneGraphNode };

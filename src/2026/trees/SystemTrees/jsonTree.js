class JsonTreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.children = [];
  }
}

class JsonTree {
  constructor(object) {
    this.root = this.build("root", object);
  }

  build(key, value) {
    const node = new JsonTreeNode(key, value);

    if (value && typeof value === "object") {
      for (const [childKey, childValue] of Object.entries(value)) {
        node.children.push(this.build(childKey, childValue));
      }
    }

    return node;
  }
}

module.exports = { JsonTree, JsonTreeNode };

class CallTreeNode {
  constructor(functionName, args = []) {
    this.functionName = functionName;
    this.args = args;
    this.children = [];
  }

  addCall(functionName, args = []) {
    const child = new CallTreeNode(functionName, args);
    this.children.push(child);
    return child;
  }
}

class CallTree {
  constructor(functionName, args = []) {
    this.root = new CallTreeNode(functionName, args);
  }
}

module.exports = { CallTree, CallTreeNode };

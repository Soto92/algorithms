const SUCCESS = "success";
const FAILURE = "failure";
const RUNNING = "running";

class BehaviorTreeNode {
  tick() {
    return SUCCESS;
  }
}

class BehaviorTreeSelector extends BehaviorTreeNode {
  constructor(children = []) {
    super();
    this.children = children;
  }

  tick(context) {
    for (const child of this.children) {
      const result = child.tick(context);
      if (result !== FAILURE) return result;
    }
    return FAILURE;
  }
}

class BehaviorTreeSequence extends BehaviorTreeNode {
  constructor(children = []) {
    super();
    this.children = children;
  }

  tick(context) {
    for (const child of this.children) {
      const result = child.tick(context);
      if (result !== SUCCESS) return result;
    }
    return SUCCESS;
  }
}

module.exports = { BehaviorTreeNode, BehaviorTreeSelector, BehaviorTreeSequence, SUCCESS, FAILURE, RUNNING };

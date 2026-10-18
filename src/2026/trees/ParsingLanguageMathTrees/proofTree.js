class ProofTreeNode {
  constructor(statement, rule = null) {
    this.statement = statement;
    this.rule = rule;
    this.premises = [];
  }

  addPremise(statement, rule = null) {
    const premise = new ProofTreeNode(statement, rule);
    this.premises.push(premise);
    return premise;
  }
}

class ProofTree {
  constructor(statement) {
    this.root = new ProofTreeNode(statement);
  }
}

module.exports = { ProofTree, ProofTreeNode };

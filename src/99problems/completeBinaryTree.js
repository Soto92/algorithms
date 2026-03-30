/**
 * P63 (**) Construct a complete binary tree
 * A complete binary tree with N nodes is defined as follows: The root is node 1.
 * Its left and right children are nodes 2 and 3. For any node v, its children are 2*v and 2*v+1.
 */

function completeBinaryTree(n, v = 1) {
  if (v > n) {
    return "nil";
  }

  return [
    "t",
    "x",
    completeBinaryTree(n, 2 * v),
    completeBinaryTree(n, 2 * v + 1),
  ];
}

module.exports = { completeBinaryTree };

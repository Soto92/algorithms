/**
 * P64 (**) Layout a binary tree (1)
 * In this layout strategy, the x-coordinate is the inorder sequence number of the node,
 * and the y-coordinate is the depth of the node.
 */

function layoutBinaryTree(tree, depth = 1, xIndex = { val: 1 }) {
  if (tree === "nil") {
    return "nil";
  }

  const left = layoutBinaryTree(tree[2], depth + 1, xIndex);
  const x = xIndex.val++;
  const right = layoutBinaryTree(tree[3], depth + 1, xIndex);

  return ["t", [tree[1], x, depth], left, right];
}
module.exports = { layoutBinaryTree };

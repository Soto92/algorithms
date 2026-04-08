/**
 * P65 (**) Layout a binary tree (2)
 * An alternative layout strategy where nodes are spaced evenly with decreasing separation by depth.
 */

function treeHeight(tree) {
  if (tree === "nil") return 0;
  return 1 + Math.max(treeHeight(tree[2]), treeHeight(tree[3]));
}

function layoutBinaryTree2(tree) {
  const height = treeHeight(tree);

  function layout(t, x, depth, exp) {
    if (t === "nil") return "nil";
    const sep = Math.pow(2, exp - 1);
    const left = layout(t[2], x - sep, depth + 1, exp - 1);
    const right = layout(t[3], x + sep, depth + 1, exp - 1);
    return ["t", [t[1], x, depth], left, right];
  }

  // Determine left-most offset relative to the root being 0
  function getMinX(t, exp) {
    if (t === "nil" || t[2] === "nil") return 0;
    return Math.pow(2, exp - 1) + getMinX(t[2], exp - 1);
  }

  const startX = getMinX(tree, height - 1) + 1;
  return layout(tree, startX, 1, height - 1);
}

module.exports = { layoutBinaryTree2 };

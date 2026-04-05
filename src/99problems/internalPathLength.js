/**
 * P71 (*) Determine the internal path length of a tree
 * We define the internal path length of a multiway tree as the total sum
 * of the path lengths from the root to all nodes of the tree.
 */

function internalPathLength(tree, depth = 0) {
  if (!tree || tree.length === 0) return 0;

  return (
    depth +
    tree[1].reduce((sum, child) => {
      return sum + internalPathLength(child, depth + 1);
    }, 0)
  );
}

module.exports = { internalPathLength };

/**
 * P62B (*) Collect the nodes at a given level in a list
 * A node of a binary tree is at level N if the path from the root to the node has length N-1.
 * The root node is at level 1.
 */

function atLevel(tree, level) {
  if (tree === "nil") return [];
  if (level === 1) {
    return [tree[1]];
  }
  return atLevel(tree[2], level - 1).concat(atLevel(tree[3], level - 1));
}

module.exports = { atLevel };

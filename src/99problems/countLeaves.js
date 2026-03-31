/**
 * P61 (*) Count the leaves of a binary tree
 * A leaf is a node with no successors. Write a predicate count_leaves/2 to count them.
 */

function countLeaves(tree) {
  if (tree === "nil") return 0;
  if (tree[2] === "nil" && tree[3] === "nil") {
    return 1;
  }
  return countLeaves(tree[2]) + countLeaves(tree[3]);
}

module.exports = { countLeaves };

/**
 * P61A (*) Collect the leaves of a binary tree in a list
 * A leaf is a node with no successors. Write a predicate leaves/2 to collect them in a list.
 */

function leaves(tree) {
  if (tree === "nil") return [];
  if (tree[2] === "nil" && tree[3] === "nil") {
    return [tree[1]];
  }

  return leaves(tree[2]).concat(leaves(tree[3]));
}

module.exports = { leaves };

/**
 * P62 (*) Collect the internal nodes of a binary tree in a list
 * An internal node of a binary tree has either one or two non-empty successors.
 */

function internals(tree) {
  if (tree === "nil") return [];
  if (tree[2] === "nil" && tree[3] === "nil") {
    return [];
  }

  return [tree[1]].concat(internals(tree[2]), internals(tree[3]));
}

module.exports = { internals };

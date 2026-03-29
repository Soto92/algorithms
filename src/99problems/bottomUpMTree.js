/**
 * P72 (*) Construct the bottom-up order sequence of the tree nodes
 */

function bottomUp(tree) {
  if (!tree || tree.length === 0) return [];

  let seq = [];
  for (const child of tree[1]) {
    seq = seq.concat(bottomUp(child));
  }
  return seq.concat([tree[0]]);
}

module.exports = { bottomUp };

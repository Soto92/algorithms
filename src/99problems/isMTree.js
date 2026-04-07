/**
 * P70B (*) Check whether a given term represents a multiway tree
 * In JS, we represent a multiway tree as [value, [child1, child2, ...]]
 */

function isMTree(tree) {
  if (!Array.isArray(tree) || tree.length !== 2) return false;
  if (!Array.isArray(tree[1])) return false;

  return tree[1].every(isMTree);
}

module.exports = { isMTree };

/**
 * P59 (**) Construct height-balanced binary trees
 * In a height-balanced binary tree, the following property holds for every
 * node: The height of its left subtree and the height of its right subtree
 * are almost equal, which means their difference is not greater than one.
 *
 * Write a predicate hbal_tree/2 to construct height-balanced binary trees
 * for a given height. The predicate should generate all solutions via
 * backtracking. Put the letter 'x' as information into all nodes of the tree.
 *
 * Example:
 * hbalTree(3) // should return 15 different trees.
 */

const cache = new Map();

/**
 * Constructs all height-balanced binary trees for a given height.
 * @param {number} h The height of the trees.
 * @returns {Array} A list of all possible tree structures.
 */
function hbalTree(h) {
  if (cache.has(h)) {
    return cache.get(h);
  }

  // Base case: A tree of height 0 is an empty tree 'nil'.
  if (h === 0) {
    return ['nil'];
  }

  // Base case: A tree of height 1 is a single node.
  if (h === 1) {
    return [['t', 'x', 'nil', 'nil']];
  }

  const result = [];
  const treesH_1 = hbalTree(h - 1);
  const treesH_2 = hbalTree(h - 2);

  // Case 1: Subtrees of height (h-1, h-1)
  // Both subtrees must have height h-1 to achieve a total height of h.
  for (const l of treesH_1) {
    for (const r of treesH_1) {
      result.push(['t', 'x', l, r]);
    }
  }

  // Case 2 & 3: Subtrees of height (h-1, h-2) and (h-2, h-1)
  // One subtree must have height h-1, the other can have h-2.
  for (const l of treesH_1) {
    for (const r of treesH_2) {
      result.push(['t', 'x', l, r]); // (h-1, h-2)
      result.push(['t', 'x', r, l]); // (h-2, h-1)
    }
  }

  cache.set(h, result);
  return result;
}

module.exports = { hbalTree };

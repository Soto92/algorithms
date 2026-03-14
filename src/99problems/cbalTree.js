/**
 * P55 (**) Construct completely balanced binary trees
 * In a completely balanced binary tree, the following property holds for every
 * node: The number of nodes in its left subtree and the number of nodes in
 * its right subtree are almost equal, which means their difference is not
 * greater than one.
 *
 * Write a predicate cbal_tree/2 to construct completely balanced binary
 * trees for a given number of nodes. The predicate should generate all
 * solutions via backtracking. Put the letter 'x' as information into all
 * nodes of the tree.
 *
 * Example:
 * cbalTree(4) should return all possible completely balanced trees with 4 nodes.
 */

// Memoization cache
const cache = new Map();

/**
 * Constructs all completely balanced binary trees with a given number of nodes.
 * @param {number} n The total number of nodes.
 * @returns {Array} A list of all possible tree structures.
 */
function cbalTree(n) {
  if (cache.has(n)) {
    return cache.get(n);
  }

  // Base case: 0 nodes is an empty tree ('nil')
  if (n === 0) {
    return ['nil'];
  }

  const remaining = n - 1;
  const result = [];

  // First distribution of nodes
  const nLeft1 = Math.ceil(remaining / 2);
  const nRight1 = Math.floor(remaining / 2);

  const leftTrees1 = cbalTree(nLeft1);
  const rightTrees1 = cbalTree(nRight1);

  // Combine all possible left and right subtrees
  for (const l of leftTrees1) {
    for (const r of rightTrees1) {
      result.push(['t', 'x', l, r]);
    }
  }

  // If the node counts for subtrees are different, we have a second, distinct distribution
  if (nLeft1 !== nRight1) {
    // Note: cbalTree(nLeft1) and cbalTree(nRight1) have already been called and are cached.
    for (const l of rightTrees1) {
      for (const r of leftTrees1) {
        result.push(['t', 'x', l, r]);
      }
    }
  }

  cache.set(n, result);
  return result;
}

module.exports = { cbalTree };

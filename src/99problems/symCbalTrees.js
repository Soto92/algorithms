/**
 * P58 (**) Generate-and-test paradigm
 *
 * Apply the generate-and-test paradigm to construct all symmetric,
 * completely balanced binary trees with a given number of nodes.
 *
 * Example:
 * symCbalTrees(5) // should return 2 trees.
 */

const { cbalTree } = require('./cbalTree.js');
const { symmetric } = require('./symmetricTree.js');

/**
 * Constructs all symmetric, completely balanced binary trees with n nodes.
 * @param {number} n The number of nodes.
 * @returns {Array} A list of symmetric, completely balanced trees.
 */
function symCbalTrees(n) {
  // A symmetric tree must have an odd number of nodes.
  // The root is 1 node. The left and right subtrees must be mirror images,
  // which implies they must have the same number of nodes.
  // Total nodes = 1 (root) + 2 * (nodes in one subtree), which is always odd.
  if (n % 2 === 0) {
    return [];
  }

  // 1. Generate all completely balanced trees.
  const allCbalTrees = cbalTree(n);

  // 2. Test which ones are symmetric.
  return allCbalTrees.filter(tree => symmetric(tree));
}

/**
 * How many such trees are there with 57 nodes?
 * What if the number is even? Write an appropriate predicate.
 */

/**
 * Counts the number of symmetric, completely balanced binary trees.
 * @param {number} n The number of nodes.
 * @returns {number} The count of such trees.
 */
function countSymCbalTrees(n) {
  // We can find out how many there are by running:
  // const trees = symCbalTrees(57);
  // return trees.length;
  // This function just provides the interface for that.
  return symCbalTrees(n).length;
}

module.exports = {
  symCbalTrees,
  countSymCbalTrees,
};

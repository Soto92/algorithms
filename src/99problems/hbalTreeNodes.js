/**
 * P60 (**) Construct height-balanced binary trees with a given number of nodes
 *
 * This problem involves multiple parts:
 * 1. minNodes(H, N): Find the minimum number of nodes N for a height-balanced tree of height H.
 * 2. maxHeight(N, H): Find the maximum height H for a height-balanced tree with N nodes.
 * 3. hbal_tree_nodes(N, T): Construct all height-balanced trees T with N nodes.
 */

const { hbalTree } = require('./hbalTree.js');

const minNodesCache = new Map();
/**
 * Calculates the minimum number of nodes for a height-balanced tree of height h.
 * @param {number} h The height.
 * @returns {number} The minimum number of nodes.
 */
function minNodes(h) {
  if (minNodesCache.has(h)) return minNodesCache.get(h);
  if (h <= 0) return 0;
  if (h === 1) return 1;
  const result = 1 + minNodes(h - 1) + minNodes(h - 2);
  minNodesCache.set(h, result);
  return result;
}

/**
 * Calculates the maximum possible height of a height-balanced tree with n nodes.
 * @param {number} n The number of nodes.
 * @returns {number} The maximum possible height.
 */
function maxHeight(n) {
  if (n === 0) return 0;
  let h = 0;
  while (minNodes(h) <= n) {
    h++;
  }
  return h - 1;
}

const countNodesCache = new Map();
/**
 * Counts the nodes in a tree. Uses a cache with stringified keys.
 * @param {Array|string} tree The tree term.
 * @returns {number} The number of nodes.
 */
function countNodes(tree) {
  if (tree === 'nil') return 0;
  const key = JSON.stringify(tree);
  if (countNodesCache.has(key)) return countNodesCache.get(key);
  const result = 1 + countNodes(tree[2]) + countNodes(tree[3]);
  countNodesCache.set(key, result);
  return result;
}

/**
 * Constructs all height-balanced binary trees with a given number of nodes.
 * @param {number} n The number of nodes.
 * @returns {Array} A list of all matching tree structures.
 */
function hbalTreeNodes(n) {
  if (n === 0) {
    return ['nil'];
  }
  // Determine the possible range of heights for a tree with n nodes.
  const minH = Math.ceil(Math.log2(n + 1));
  const maxH = maxHeight(n);

  let result = [];
  for (let h = minH; h <= maxH; h++) {
    const treesOfHeightH = hbalTree(h);
    // Filter the generated trees to find ones with exactly n nodes.
    const filtered = treesOfHeightH.filter(t => countNodes(t) === n);
    result = result.concat(filtered);
  }

  return result;
}

/**
 * Find out how many height-balanced trees exist for N = 15.
 * hbalTreeNodes(15).length will provide the answer.
 */

module.exports = { minNodes, maxHeight, hbalTreeNodes, countNodes };

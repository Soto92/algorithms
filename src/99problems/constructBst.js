/**
 * P57 (**) Binary search trees (dictionaries)
 *
 * Write a predicate to construct a binary search tree from a list of
 * integer numbers.
 *
 * Example:
 * construct([3,2,5,7,1])
 * // returns ['t', 3, ['t', 2, ['t', 1, 'nil', 'nil'], 'nil'], ['t', 5, 'nil', ['t', 7, 'nil', 'nil']]]
 *
 * Then use this predicate to test the solution of the problem P56.
 * Example:
 * testSymmetric([5,3,18,1,4,12,21]) // Yes
 * testSymmetric([3,2,5,7,4]) // No
 */

const { symmetric } = require('./symmetricTree.js');

/**
 * Immutably inserts a value into a binary search tree.
 * @param {number} value The value to insert.
 * @param {Array|string} tree The tree term to insert into.
 * @returns {Array|string} The new tree term.
 */
function add(value, tree) {
  if (tree === 'nil') {
    return ['t', value, 'nil', 'nil'];
  }

  const [t, v, l, r] = tree;

  if (value < v) {
    const newLeft = add(value, l);
    return ['t', v, newLeft, r];
  }
  if (value > v) {
    const newRight = add(value, r);
    return ['t', v, l, newRight];
  }

  // If value is equal, it already exists. Return the original tree.
  return tree;
}

/**
 * Constructs a binary search tree from a list of numbers.
 * @param {number[]} list The list of numbers to insert.
 * @returns {Array|string} The constructed BST term.
 */
function construct(list) {
  if (!list || list.length === 0) {
    return 'nil';
  }
  return list.reduce((tree, value) => add(value, tree), 'nil');
}

/**
 * Constructs a BST from a list and tests if it is symmetric.
 * @param {number[]} list The list of numbers to form the tree.
 * @returns {boolean} True if the resulting BST is symmetric.
 */
function testSymmetric(list) {
  const tree = construct(list);
  return symmetric(tree);
}

module.exports = {
  add,
  construct,
  testSymmetric,
};

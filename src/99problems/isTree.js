/**
 * P54 (*) Check whether a given term represents a binary tree
 * Write a predicate istree/1 which succeeds if and only if its argument
 * is a Prolog term representing a binary tree.
 *
 * In Prolog, an empty tree is the atom 'nil' and a non-empty tree is
 * a term t(X,L,R), where X is the root, and L and R are the left and
 * right subtrees.
 *
 * We will represent these terms in JS as:
 * 'nil' for an empty tree.
 * ['t', value, left, right] for a non-empty tree.
 *
 * Example:
 * isTree(['t', 'a', ['t', 'b', 'nil', 'nil'], 'nil']) // true
 * isTree(['t', 'a', ['t', 'b', 'nil', 'nil']]) // false, structure is wrong
 * isTree('nil') // true
 * isTree(['t', 'a', 'nil']) // false
 */

function isTree(term) {
  // An empty tree is 'nil'
  if (term === 'nil') {
    return true;
  }

  // A non-empty tree must be an array of the form ['t', value, left, right]
  if (Array.isArray(term) && term[0] === 't') {
    if (term.length !== 4) {
      return false; // A non-empty tree must have 4 components
    }
    // Recursively check the left and right subtrees
    const leftSubtree = term[2];
    const rightSubtree = term[3];
    return isTree(leftSubtree) && isTree(rightSubtree);
  }

  // If it's not 'nil' and not a valid tree structure, it's not a tree.
  return false;
}

module.exports = { isTree };

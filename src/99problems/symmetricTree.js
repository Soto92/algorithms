/**
 * P56 (**) Symmetric binary trees
 * Let us call a binary tree symmetric if you can draw a vertical line
 * through the root node and then the right subtree is the mirror image
 * of the left subtree. Write a predicate symmetric/1 to check whether
 * a given binary tree is symmetric.
 *
 * Hint: Write a predicate mirror/2 first to check whether one tree is
 * the mirror image of another. We are only interested in the structure,
 * not in the contents of the nodes.
 */

/**
 * Checks if two trees are structural mirror images of each other.
 * @param {*} tree1 The first tree term.
 * @param {*} tree2 The second tree term.
 * @returns {boolean} True if they are mirror images.
 */
function mirror(tree1, tree2) {
  // Two empty trees are mirrors of each other.
  if (tree1 === 'nil' && tree2 === 'nil') {
    return true;
  }

  // If one is empty and the other isn't, they are not mirrors.
  if (tree1 === 'nil' || tree2 === 'nil' || !Array.isArray(tree1) || !Array.isArray(tree2)) {
    return false;
  }

  // For two non-empty trees, they are mirrors if the left subtree of the first
  // is a mirror of the right subtree of the second, AND the right subtree
  // of the first is a mirror of the left subtree of the second.
  const [_t1, _v1, left1, right1] = tree1;
  const [_t2, _v2, left2, right2] = tree2;

  return mirror(left1, right2) && mirror(right1, left2);
}

/**
 * Checks if a binary tree is structurally symmetric.
 * @param {*} tree The tree term to check.
 * @returns {boolean} True if the tree is symmetric.
 */
function symmetric(tree) {
  // An empty tree is symmetric.
  if (tree === 'nil') {
    return true;
  }

  // A non-empty tree must be a valid node structure.
  if (!Array.isArray(tree)) {
    return false;
  }

  // A non-empty tree is symmetric if its left and right subtrees are mirrors.
  const [_t, _v, left, right] = tree;
  return mirror(left, right);
}

module.exports = { symmetric, mirror };

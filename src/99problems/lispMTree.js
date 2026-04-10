/**
 * P73 (**) Lisp-like tree representation
 * Example: (a (b c))
 */

function mTreeToLisp(tree) {
  if (!tree || tree.length === 0) return "";
  if (tree[1].length === 0) return tree[0];

  let str = `(${tree[0]}`;
  for (const child of tree[1]) {
    str += ` ${mTreeToLisp(child)}`;
  }
  str += ")";
  return str;
}

module.exports = { mTreeToLisp };

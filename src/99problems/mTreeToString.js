/**
 * P70 (**) Tree construction from a node string
 * Represent multiway tree as sequence of nodes with '^' to signify stepping back up.
 * Example: afg^^c^bd^e^^^
 */

function mTreeToString(tree) {
  if (!tree) return "";
  let str = tree[0];
  for (const child of tree[1]) {
    str += mTreeToString(child);
  }
  return str + "^";
}

module.exports = { mTreeToString };

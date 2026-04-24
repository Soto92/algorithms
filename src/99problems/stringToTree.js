/**
 * P67 (**) A string representation of binary trees
 * Example string format: a(b(d,e),c(,f(g,)))
 */

function treeToString(tree) {
  if (tree === "nil") return "";
  const val = tree[1];
  const left = tree[2];
  const right = tree[3];

  if (left === "nil" && right === "nil") {
    return val;
  }
  return `${val}(${treeToString(left)},${treeToString(right)})`;
}

module.exports = { treeToString };

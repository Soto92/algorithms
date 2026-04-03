/**
 * P69 (**) Dotstring representation of binary trees
 * Example: abd..e..c.fg...
 * Where '.' represents an empty node ('nil')
 */

function treeToDotstring(tree) {
  if (tree === "nil") {
    return ".";
  }
  return tree[1] + treeToDotstring(tree[2]) + treeToDotstring(tree[3]);
}

module.exports = { treeToDotstring };

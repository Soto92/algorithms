/**
 * P70C (*) Count the nodes of a multiway tree
 */

function countMNodes(tree) {
  if (!tree || tree.length === 0) return 0;

  return (
    1 +
    tree[1].reduce((sum, child) => {
      return sum + countMNodes(child);
    }, 0)
  );
}

module.exports = { countMNodes };

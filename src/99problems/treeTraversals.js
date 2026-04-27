/**
 * P68 (**) Preorder and inorder sequences of binary trees
 */

function preorder(tree) {
  if (tree === "nil") return [];
  return [tree[1]].concat(preorder(tree[2]), preorder(tree[3]));
}

function inorder(tree) {
  if (tree === "nil") return [];
  return inorder(tree[2]).concat([tree[1]], inorder(tree[3]));
}

function treeFromPreorderAndInorder(preSeq, inSeq) {
  if (preSeq.length === 0) return "nil";

  const rootVal = preSeq[0];
  const rootIdx = inSeq.indexOf(rootVal);

  const leftIn = inSeq.slice(0, rootIdx);
  const rightIn = inSeq.slice(rootIdx + 1);
  const leftPre = preSeq.slice(1, 1 + leftIn.length);
  const rightPre = preSeq.slice(1 + leftIn.length);

  return [
    "t",
    rootVal,
    treeFromPreorderAndInorder(leftPre, leftIn),
    treeFromPreorderAndInorder(rightPre, rightIn),
  ];
}
module.exports = { preorder, inorder, treeFromPreorderAndInorder };

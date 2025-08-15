function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function invertTree(root) {
  if (root === null) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

function buildTree(arr, index = 0) {
  if (index >= arr.length || arr[index] == null) return null;
  const node = new TreeNode(arr[index]);
  node.left = buildTree(arr, 2 * index + 1);
  node.right = buildTree(arr, 2 * index + 2);
  return node;
}

function treeToArray(root) {
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

// Test
const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
const invertedRoot = invertTree(root);
console.log(treeToArray(invertedRoot));

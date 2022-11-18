function nodeDepths(root) {
  return nodeDepthsRec(root, 0)
}

function nodeDepthsRec(root, deepth) {
  if (!root) return 0
  if (root.left == null && root.right == null) {
    return deepth
  }
  
  let left  = nodeDepthsRec(root.left, deepth + 1)
  let right = nodeDepthsRec(root.right, deepth + 1)

  return deepth + left + right
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
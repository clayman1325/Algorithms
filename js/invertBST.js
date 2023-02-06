function invertBinaryTree(tree) {
  if(!tree){
    return null
  }

  const leftNode  = tree.left;
  const rigthNode = tree.right;

  tree.right = leftNode;
  tree.left = rigthNode;

  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
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
exports.invertBinaryTree = invertBinaryTree;

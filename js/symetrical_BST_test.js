// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function symmetricalTree(tree) {
  return treesAreMirrored(tree.left, tree.right);
}

function treesAreMirrored(left, right) {
    if(left != null && right !== null){
      if(left.value == right.value) {
        return treesAreMirrored(left.left, right.right) &&
          treesAreMirrored(left.right, right.left);
      }
    }
  return left === right
}
// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;

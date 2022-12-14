// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function heightBalancedBinaryTree(tree) {
  const maxHeightInfo = heightRec(tree)

  return maxHeightInfo[0];
}
function heightRec(tree) {
  if(tree == null) {
    return [true, -1]
  }
  const leftHeight  = heightRec(tree.left);
  const rightHeight = heightRec(tree.right);

  const difference = Math.abs(leftHeight[1] - rightHeight[1]);
  const isBalanced = 
    leftHeight[0]  && 
    rightHeight[0] &&
    difference <= 1;

  const currentHeight = Math.max(leftHeight[1], rightHeight[1]) + 1

  return [isBalanced, currentHeight]
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;
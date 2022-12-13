class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  const result = BTDiameterRec(tree);

  return Math.max(result[0] - 1, result[1]);
}

function BTDiameterRec(tree) {
  if(tree == null) {
    return [0,0]
  }

  const lengthLeft  = BTDiameterRec(tree.left);
  const lengthRight = BTDiameterRec(tree.right);
  
  let length            = lengthLeft[0] + lengthRight[0];
  const maxDiameter     = Math.max(lengthLeft[1], lengthRight[1]);
  const currentDiameter = Math.max(length, maxDiameter);
  length                = Math.max(lengthLeft[0], lengthRight[0]) + 1
  
  return [length, currentDiameter]
}


// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
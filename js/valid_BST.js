class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validSubBST(tree, -100000, 100000)
}

function validSubBST(tree, min, max) {
  if(!tree) {
    return true;
  }
  if(tree.value >= max || tree.value < min) {
    return false;
  }
  const validRight = validSubBST(tree.right, tree.value, max) 
  const validLeft  = validSubBST(tree.left, min, tree.value)

  return validRight && validLeft
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;

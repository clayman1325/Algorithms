// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  return sumNodes(root, 0)
}

function sumNodes(root, sum) {
  if (!root) return []
  sum += root.value
  
  if(root.left == null && root.right == null) {
    return [sum]
  }
  
  let leftResult  = sumNodes(root.left, sum)
  let rightResult = sumNodes(root.right, sum)
  
  return leftResult.concat(rightResult)
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
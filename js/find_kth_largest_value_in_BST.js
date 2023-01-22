// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  let value;
  const stack = recursiveSearch(tree, k, [])
  for(let i=0;i< k;i++) {
    value = stack[i]
  }
  return value
}

function recursiveSearch(tree, k, stack) {
  if(!tree) {
    return stack
  }

  const rigthTree = recursiveSearch(tree.right, k, stack)
  stack.push(tree.value)
  const leftTree  = recursiveSearch(tree.left, k, stack)

  return stack;
}
// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;

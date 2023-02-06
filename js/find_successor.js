// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const stack = findNodeRec(tree, node, [])
  let nodeIdx;
  for (let i = 0; i < stack.length; i++){
    if(stack[i].value == node.value) {
      nodeIdx = i;
      i = stack.length
    }
  }

  return stack[nodeIdx + 1];
}

function findNodeRec(tree, node, stack) {
  if(tree == null) {
    return stack
  }

  stack.concat(findNodeRec(tree.left, node, stack))
  stack.push(tree)
  stack.concat(findNodeRec(tree.right, node, stack))
  return stack
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;

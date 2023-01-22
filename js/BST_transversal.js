function inOrderTraverse(tree, array) {
  if(tree == null) {
    return array
  }
  array.concat(inOrderTraverse(tree.left, array))
  array.push(tree.value)
  array.concat(inOrderTraverse(tree.right, array))
  
  return array
}

function preOrderTraverse(tree, array) {
  if(tree == null){
    return array
  }
  array.push(tree.value);
  array.concat(preOrderTraverse(tree.left, array))
  array.concat(preOrderTraverse(tree.right, array))

  return array;
}

function postOrderTraverse(tree, array) {
  if(tree == null) {
    return array
  }
  
  array.concat(postOrderTraverse(tree.left, array))
  array.concat(postOrderTraverse(tree.right, array))
  array.push(tree.value)
  return array
}


// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;

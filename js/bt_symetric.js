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
  const leftTree  = dfs(tree.left);
  const rightTree = dfsReverse(tree.right);

  console.log(leftTree, rightTree)
  if(leftTree.length != rightTree.length) return false 
  for(let i = 0; i<leftTree.length; i++) {
    if(leftTree[i] != rightTree[i]) return false;
  }
  return true;
}

function dfs(tree) {
  if(tree == null) {
    return []
  }

  let left = dfs(tree.left);
  let rigth = dfs(tree.right);
  left = left.concat([tree.value])
left.concat(rigth)
  return left;
}

function dfsReverse(tree){
  if(tree == null) {
    return []
  }

  let rigth = dfs(tree.right);
  let left = dfs(tree.left);
  
  rigth = rigth.concat([tree.value])

  rigth = rigth.concat(left)
  return rigth;
}
// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;

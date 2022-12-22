// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function mergeBinaryTrees(tree1, tree2) {
  let newTree = new BinaryTree();
  
  const result = transverseTrees(newTree, tree1, tree2);

  return result;
}

function transverseTrees(tree, tree1, tree2) {
  // console.log(tree1 && tree1.value, tree2 && tree2.value)
  if(tree1 == null & tree2 == null){
    return tree;
  }

  if (tree1 && tree2) {
    tree.value = tree1.value + tree2.value; 
  } else if(tree1) {
    tree.value = tree1.value;
  } else {
    tree.value = tree2.value;
  }
  
  tree.left  = new BinaryTree();
  tree.right = new BinaryTree();

  tree.left = transverseTrees(tree.left, tree1 && tree1.left, tree2 && tree2.left)
  tree.right = transverseTrees(tree.right, tree1 && tree1.right, tree2 && tree2.right )

  return tree;
}

// Do not edit the line below.
exports.mergeBinaryTrees = mergeBinaryTrees;
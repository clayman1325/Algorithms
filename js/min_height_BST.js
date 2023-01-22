function minHeightBst(array) {
  const tree = new BST();
  return buildBST(tree, array);
}

function buildBST(tree, array) {
  if(array.length <= 1) {
    tree.value = array[0]
    return tree;
  }
  
  const rootIdx = (array.length - 1) / 2

  tree.value = array[Math.floor(rootIdx)]
  
  if(array.length == 2) {
    tree.right = new BST(array[1])
  } else {
    tree.left = buildBST(new BST(), array.splice(0,rootIdx))
    tree.right = buildBST(new BST(), array.splice(1, array.length - 1))
  }
  return tree;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;

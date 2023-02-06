// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx
  }
}
function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0)
  return reconstructBstRec(-100000, 100000, preOrderTraversalValues, treeInfo);
}

function reconstructBstRec(lowerBound, upperBound, array, treeInfo) {
  if(treeInfo.rootIdx === array.length) return null;

  const rootValue = array[treeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  treeInfo.rootIdx++
  const leftSubtree = reconstructBstRec(lowerBound, rootValue, array, treeInfo)
  const rightSubtree = reconstructBstRec(rootValue, upperBound, array, treeInfo)
  return new BST(rootValue, leftSubtree, rightSubtree)
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;  
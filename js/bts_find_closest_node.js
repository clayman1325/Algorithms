function findClosestValueInBst(tree, target) {
  let currDifference = {
    diff:   100000,
    value:  100000
  };

  const value = findValue(currDifference, tree, target);

  return value.value;

}

function findValue(currDifference, tree, target) {
  if(currDifference.diff == 0 || tree == null) {
    return currDifference
  }

  const difference = Math.abs(tree.value - target)

  if(currDifference.diff > difference) {
    currDifference.diff = difference 
    currDifference.value = tree.value
  }

  const leftDifference = findValue(currDifference, tree.left, target) 
  const rightDifference = findValue(currDifference, tree.right, target) 

  if(currDifference>leftDifference) {
    currDifference.diff = leftDifference
    currDifference.value = tree.value
  }
  if(currDifference>rightDifference) {
    currDifference.diff = rightDifference
    currDifference.value = tree.value
  }

  return currDifference;
  
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
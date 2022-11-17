class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function findClosestValueInBst(tree: BST, target: number) {
    const result: number = findRecClosestValueInBst(tree, target, tree.value)
    return result;
  }
  
  function findRecClosestValueInBst(tree: BST, target: number, closestValue: number): number {
    if (tree == null){
      return closestValue;
    }
    if(Math.abs(tree.value - target) <= Math.abs(closestValue - target) ){
      closestValue = tree.value
    }
    if(target < tree.value){
      return findRecClosestValueInBst(tree.left, target, closestValue)
    } else if(target > tree.value){
      return findRecClosestValueInBst(tree.right, target, closestValue)
    } else {
      return closestValue;
    }
  }
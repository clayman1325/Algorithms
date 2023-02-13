// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const linkedList = new LinkedList(7);

  const result = recSum(linkedList, linkedListOne, linkedListTwo, 0)

  return linkedList;
}

function recSum(sum, linkedListOne, linkedListTwo, carryover) {  
  if(linkedListOne == null && linkedListTwo == null) {
    if(carryover > 0) {
      const newNode = new LinkedList(carryover);
      sum.next = newNode;
      sum = newNode;
    }
    return sum
  }
  let currSum = carryover;
  let newNode;

  if(linkedListOne == null) {
    currSum += linkedListTwo.value
  } else if(linkedListTwo == null) {
    currSum += linkedListOne.value
  } else {
    currSum += linkedListOne.value + linkedListTwo.value
  }
  
  carryover = 0;
  if(currSum > 9) {
    carryover = Math.floor(currSum / 10);
    currSum =   Math.floor(currSum % 10)
  }

  newNode = new LinkedList();
  sum.next = newNode;
  sum.value = currSum;
  if(
      (linkedListOne == null || linkedListOne.next == null) && 
      (linkedListTwo == null || linkedListTwo.next == null)
    ){
    newNode      = sum;
    newNode.next = null 
  }
  return recSum(newNode, linkedListOne && linkedListOne.next, linkedListTwo && linkedListTwo.next, carryover) 
}
// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;

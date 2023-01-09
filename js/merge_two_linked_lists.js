// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let unFinished  = true;
  let node        = null;
  const lengthOne = linkListLenght(linkedListOne);
  const lengthTwo = linkListLenght(linkedListTwo);

  if (lengthTwo > lengthOne) {
    const aux = linkedListOne;
    linkedListOne = linkedListTwo;
    linkedListTwo = aux;
  }
  
  while(linkedListOne && unFinished) {
    node = recSearch(linkedListOne, linkedListTwo);
    if(node == null) {
      linkedListOne = linkedListOne.next
    } else {
      unFinished = false
    }
  }
  return node;
}

function linkListLenght (node) {
  let counter = 0;
  while(node) {
    counter++ 
    node = node.next;
  }
  return counter
}

function recSearch (nodeA, nodeB) {
  if( nodeA == null && nodeB == null) {
    return null;
  }
  if((nodeA && nodeA.value) == (nodeB && nodeB.value)){
    return nodeA
  }
  nodeA = nodeA != null ? nodeA.next : null;
  nodeB = nodeB != null ? nodeB.next : null;

  return recSearch(nodeA, nodeB)
}
// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;
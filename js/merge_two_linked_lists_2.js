// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let auxSet =  new Set();
  while(linkedListOne) {
    auxSet.add(linkedListOne.value)
    linkedListOne = linkedListOne.next;
  }

  console.log(auxSet)

  while(linkedListTwo) {
    if(auxSet.has(linkedListTwo.value)) {
      return linkedListTwo
    }

    linkedListTwo = linkedListTwo.next
  }

  return null;
}
// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;
function moveElementToEnd(array, toMove) {
  let right = array.length - 1;
  let left  = 0;

  while(left < right) {
    if(array[left]== toMove && array[right] != toMove){
      const aux    = array[right];
      array[right] = array[left];
      array[left]  = aux;
    }
    if(array[left] != toMove)  { left++ };
    if(array[right] == toMove) { right-- };
  }
  return array
}

exports.moveElementToEnd = moveElementToEnd;
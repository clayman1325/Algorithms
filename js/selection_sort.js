function selectionSort(array) {
  let sortedArrayLength = 0;
  let unSortMinPos   = 0
  let unSortMinValue = array[0]
  
  while(sortedArrayLength < array.length - 1) {
    for (let i=sortedArrayLength + 1; i<array.length; i++) {
      if(unSortMinValue >= array[i]) {
        unSortMinPos = i;
        unSortMinValue = array[i];
      }
    }
    const aux = array[sortedArrayLength]
    array[sortedArrayLength] = unSortMinValue
    array[unSortMinPos] = aux;
    
    sortedArrayLength++
    unSortMinPos = sortedArrayLength
    unSortMinValue = array[unSortMinPos]
  }

  return array
}

// Do not edit the line below.
exports.selectionSort = selectionSort;

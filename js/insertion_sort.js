function insertionSort(array) {
  let sortArray = []
  sortArray.push(array[0])

  let count = 0
  for(let i=0; i<array.length; i++){
    count++
    const newElement = array[i+1];

    if(newElement <= sortArray[0]){
      sortArray.unshift(newElement)
    } else {
      let limit = sortArray.length
      let j = 1;
      
      while(j < limit){
        if(newElement <= sortArray[j]) {
          const leftArray  = sortArray.splice(0,j)
          sortArray = leftArray.concat([newElement]).concat(sortArray)
          j = limit
        } else {
          j++
        }
      }
      if(newElement > sortArray[limit-1]) {
        sortArray.push(newElement);
      }
    }
  }

  return sortArray;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

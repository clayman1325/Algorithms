function bubbleSort(array) {
  let finished = false
  let i = 0;
  console.log(finished)
  while(!finished) {
    let sorted = true;
    
    for(let i=0; i<array.length; i++){
      if (array[i+1] < array[i]) {
        const aux = array[i];
        array[i] = array[i+1]
        array[i+1] = aux;
        sorted = false;
      }
    }
    if(sorted == true) { finished = true }
  }

  return array
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

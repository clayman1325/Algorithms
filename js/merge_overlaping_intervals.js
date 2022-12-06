function mergeOverlappingIntervals(array) {
  if(array.length == 1) return array
  
  array  = array.sort((a, b) => a[0] - b[0]);

  let prevSection = 0
  let nextSection = prevSection + 1
  let currentFinish = array[prevSection][1]
  let currentStart  = array[nextSection][0] 

  while(
    nextSection < array.length 
  ){
    if(currentFinish < currentStart){
      prevSection += 1
      nextSection += 1
      if(nextSection + 1 < array.length) {
        currentFinish = array[prevSection][1]
        currentStart  = array[nextSection][0]
      }
    } else if(array[prevSection][0] > array[nextSection][0]){
      if(currentFinish < array[nextSection][1]){
        const newArray = []
        for(let i=0; i< array.length; i++) {
          if(i != prevSection) { newArray.push(array[i]) }
        }
        array = newArray;
      } else {
        array[prevSection][0] = array[nextSection][0]
        const newArray = []
        for(let i=0; i< array.length; i++) {
          if(i != nextSection) { newArray.push(array[i]) }
        }
        array = newArray;
      }
    } else {
      array[prevSection][1] = array[nextSection][1]
      const newArray = []
      for(let i=0; i< array.length; i++) {
        if(i != nextSection) { newArray.push(array[i]) }
      }
      array = newArray;
    }
  }
  
  return array;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

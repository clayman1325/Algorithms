function isMonotonic(array) {
  let slope = 0;
  for (let i = 0; i< array.length; i++){
    if(array[i]<array[i+ 1]) {
      slope = 1;
      i = array.length
    } else if(array[i]>array[i+ 1]) {
      slope = -1
      array.length
    }
  }
  for (let i = 0; i< array.length; i++){
    if(array[i] < array[i+ 1] && slope == -1) {
      return false;
    } else if(array[i] > array[i+ 1] && slope == 1) {
      return false;
    }
  }
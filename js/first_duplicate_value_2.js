function firstDuplicateValue(array) {
  const duplicateArray = []
  duplicateArray[array.length] = 0;
  for (let i=0; i< array.length; i++){
    if (duplicateArray[array[i] - 1] == null) {
      duplicateArray[array[i] - 1] = array[i]
    } else {
      return array[i]
    }
  }
  return -1;
}
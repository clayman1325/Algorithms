function firstDuplicateValue(array) {
  const set = new Set();

  for(let i = 0; i < array.length; i++){
    if(set.has(array[i])){
      return array[i];
    }
    set.add(array[i]);
  }
  return -1;
}

exports.firstDuplicateValue = firstDuplicateValue;
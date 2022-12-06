function firstDuplicateValue(array) {
  const counter = {}
  for(let i=0; i< array.length; i++){
    if(counter[array[i]]){
      counter[array[i]] +=1;
    } else {
      counter[array[i]] = 1;
    }
    console.log(counter)
  }
  
  for(let i=0; i<array.length; i++) {
    if(counter[array[i]] > 1) { return array[i] };
  }
  return -1;
}

exports.firstDuplicateValue = firstDuplicateValue;
const input = [1,2,3]
console.log( new Set(recursion(input, [])))


function recursion(array, subArray) {
  if (array.length == 1) {
    return [array]
  }

  for(let i = 0; i < array.length; i++) {
    const nextArray = rejectElement(i, [...array]);

    const result = recursion(nextArray, subArray)
    subArray = subArray.concat(result)
  }

  subArray = subArray.concat([array])
  return subArray
}

function rejectElement (r, array) {
  let newArray = [];

  for(let i = 0; i< array.length; i++) {
    if(i != r) {
      newArray.push(array[i])
    }
  }
  return newArray;
}
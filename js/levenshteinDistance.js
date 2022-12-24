function levenshteinDistance(str1, str2) {
  const array = new Array(str1.length + 1).fill([])
  
  str1 = [" "].concat(str1.split(""));
  str2 = [" "].concat(str2.split(""));
  
  array[0] = [0] 

  for(let row = 1; row < str1.length; row++) {
    let lastValue = array[row-1][0];
    array[row] = [lastValue + 1];
  }

  for(let column = 0; column < str2.length; column++){
    const lastValue = array[0][column -1] + 1 || 0
    array[0][column] = lastValue
  }
  
  for(let row = 1; row < str1.length; row++) {
    for (let column = 1; column < str2.length; column++) {
      if(str1[row] == str2[column]) {
        array[row][column] = array[row - 1][column -1]
      } else {
        array[row][column] = 1 + Math.min(array[row - 1][column -1], array[row-1][column], array[row][column -1])
      }
    }
  }
  console.log(array[str1.length - 1][str2.length - 1])
  return array[str1.length - 1][str2.length - 1]
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;

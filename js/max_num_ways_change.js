function kadanesAlgorithm(array) {
  let maxNum     = array[0];
  let currentMax = array[0];

  for(let i = 1; i < array.length; i++) {
    currentMax = Math.max(array[i], currentMax + array[i])
    maxNum     = Math.max(maxNum, currentMax)
  }
  return maxNum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
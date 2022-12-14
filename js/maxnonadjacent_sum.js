function maxSubsetSumNoAdjacent(array) {
  console.log(array.length)
  if (array.length == 0) { return 0 }
  if (array.length == 1) { return array[0] }
  
  const maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1])

  for(let i= 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i-2] + array[i])
  }
  
  return maxSums[maxSums.length - 1];
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
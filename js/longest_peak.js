function longestPeak(array) {
  let maxPeak = 0;
  
  for(let i = 0; i < array.length; i++) {
    if(array[i-1] < array[i] && array[i] > array[i+1]) {
      const peakLength = calculatePeakLength(array, i)
      if(maxPeak <= peakLength) { maxPeak = peakLength }
    }
  }
  return maxPeak;
}

function calculatePeakLength(array, middle) {
  let count          = true
  let leftSideLenght = 0;
  let leftIdx        = middle;
  
  while (leftIdx >= 0 && count) {
    if(array[leftIdx] > array[leftIdx - 1] ) {
      leftIdx--
      leftSideLenght++
    } else {
      count = false
    }
  }

  count = true
  let rightIdx = middle;
  let rigthSideLength = 0;
  
  while (rightIdx < array.length && count) {
    if(array[rightIdx] > array[rightIdx + 1] ) {
      rightIdx++
      rigthSideLength++
    } else {
      count = false;
    }
  }
  
  return leftSideLenght + rigthSideLength + 1
}

exports.longestPeak = longestPeak;

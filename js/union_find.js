function hasSingleCycle(array) {
  let numOfElementVisited = 0;
  let currentIdx = 0;
  while(numOfElementVisited < array.length) {
    if(numOfElementVisited > 0 && currentIdx === 0) {
      return false;
    }
    numOfElementVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0
}

function getNextIdx(currentIdx, array) {
  let nextIdx = (currentIdx + array[currentIdx]) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;

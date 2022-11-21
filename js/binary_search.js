function binarySearch(array, target) {
	const lenght = array.length - 1
	let   idx    = Math.floor(lenght / 2)
  let   k      = 0;
  
	while (idx < (lenght + 1)) {
    if(k >= lenght) return -1 
  
    if (array[idx] == target) return idx
    
    if (array[idx] > target) {
      nextIdx = Math.floor(idx / 2)
      idx = nextIdx
    } else {
      nextIdx = Math.ceil((lenght - idx) / 2)
      idx = idx + nextIdx
    }
    k++
	}
	return -1
}

exports.binarySearch = binarySearch;
function smallestDifference(arrayOne, arrayTwo) {
  let left  = 0;
  let right = 0;

  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);

  let result      = [];
  let currentDiff = 0;
  let minDiff     = 100000000;
  let k = 0
  
  while(left < arrayOne.length  && right < arrayTwo.length){
    let arr1Element = Math.abs(arrayOne[left]);
    let arr2Element = Math.abs(arrayTwo[right]);
    currentDiff = Math.abs(arr1Element - arr2Element)

    if(currentDiff < minDiff) { 
      minDiff = currentDiff;
      result=[arrayOne[left], arrayTwo[right]]
    }
    
    arr1Element = Math.abs(arrayOne[left + 1]);
    const leftMove  = Math.abs(arr1Element - arr2Element)

    arr1Element = Math.abs(arrayOne[left]);
    arr2Element = Math.abs(arrayTwo[right + 1]);
    const rightMove = Math.abs(arr1Element - arr2Element)

    if(leftMove > rightMove || (left == (arrayOne.length - 1))) {
      right += 1;
    } else if(leftMove <= rightMove || (right == (arrayTwo.length - 1))) {
      left += 1 
    }
  }

  return result;
}

exports.smallestDifference = smallestDifference;

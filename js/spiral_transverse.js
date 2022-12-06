function spiralTraverse(array) {
  if(array.length == 1) { return array[0] }
  
  let minLimitRow = 0;
  let minLimitCol = 0;
  let maxLimitRow = array.length - 1;
  let maxLimitCol = array[0].length - 1;

  let result = [];

  while(minLimitRow <= maxLimitRow && minLimitCol <= maxLimitCol) {
    for (let j = minLimitCol; j <= maxLimitCol; j++) {
      result.push(array[minLimitRow][j])
    }
    // console.log(minLimitRow+1, maxLimitRow)
    for (let i = minLimitRow + 1; i <= maxLimitRow; i++) {
      result.push(array[i][maxLimitCol])
    }

    if(result.length == (array.length * array[0].length)) { return result }
    if(minLimitCol == maxLimitCol) { return result }
    for (let j = maxLimitCol - 1; j >= minLimitCol; j--) {
      result.push(array[maxLimitRow][j])
    }

    if(minLimitRow == maxLimitRow) { return result }
    for (let i = maxLimitRow - 1; i > minLimitRow; i--) {
      result.push(array[i][minLimitCol])
    }
    
    maxLimitCol--;
    maxLimitRow--;
    minLimitCol++;
    minLimitRow++;
  }
  return result;
}

exports.spiralTraverse = spiralTraverse;
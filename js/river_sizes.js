function riverSizes(matrix) {
  const riverSizesResult = []

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] == 1) {
        riverSizesResult.push(findRiverSize(matrix, i, j));
      }
    }
  }
  console.log(riverSizesResult)
  return riverSizesResult.filter((elem) => elem != 0 )
}

function findRiverSize(matrix, row, col) {
  if(
      matrix[row][col] == 0 || 
      matrix[row][col] == -1
    ) {
    return 0;
  }

  let right = 0;
  let left  = 0;
  let down  = 0;
  let up    = 0;

  if(matrix[row][col] = -1) {
    if(row > 0 && matrix[row-1][col] != -1)  {
      up = findRiverSize(matrix, row - 1, col)
      matrix[row][col] = -1;
      }
    if(col > 0 && matrix[row][col-1] != -1) {
      left = findRiverSize(matrix, row, col - 1)
      matrix[row][col] = -1;
    }
    if(col < matrix[0].length - 1 && matrix[row][col+1] != -1) {
      right = findRiverSize(matrix, row, col + 1)
      matrix[row][col] = -1;
    }
    if(row < matrix.length - 1 && matrix[row+1][col] != -1) {
      down = findRiverSize(matrix, row + 1, col)
      matrix[row][col] = -1;
    }
  }
  
  matrix[row][col] = -1;
  
  return up + right + left + down + 1
}

// Do not edit the line below.
exports.riverSizes = riverSizes;

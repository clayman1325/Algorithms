function removeIslands(matrix) {
  for(let i=1; i < matrix.length - 1; i++){
    for(let j=1; j < matrix[0].length -1; j++){
      if(matrix[i][j] == 1) {
        const islandResult = isIsland(matrix, i, j);
        if(islandResult){
          removeIsland(matrix, i, j)
        }
      }
    }
  }

  for(let i = 0; i< matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++) {
      if(matrix[i][j] == -1) { matrix[i][j] = 1 }
    }
  }
  
  return matrix;
}

function isIsland(matrix, i, j) {
  const rowLimit = matrix.length - 1;
  const colLimit = matrix[0].length - 1;

  if(i == 0 || j == 0 || i >= rowLimit || j >= colLimit) {
    return (matrix[i][j] == 0);
  }
  
  let down  = true
  let left  = true
  let right = true
  let up    = true

  if(matrix[i][j] != -1 && matrix[i][j] != 0) {
    if(i + 1 < matrix.length) {
      matrix[i][j] = -1
      down  = isIsland(matrix, i + 1, j)
    }
    if(j - 1 >= 0) {
      matrix[i][j] = -1
      left  = isIsland(matrix, i, j - 1)     
    }
    if(j + 1 < matrix[0].length) {
      matrix[i][j] = -1
      right = isIsland(matrix, i, j + 1)      
    }
    if(i - 1 >= 0) {
       matrix[i][j] = -1
       up   = isIsland(matrix, i - 1, j)     
    }
  }
  
  return true && down && up && left && right;
}

function removeIsland(matrix, i, j) {
  if(matrix[i][j] == 0) {
    return 
  }
  
  if(matrix[i][j] != 0) {
    if(i + 1 < matrix.length) {
      matrix[i][j] = 0
      down  = removeIsland(matrix, i + 1, j)
    }
    if(j - 1 > 0) {
      matrix[i][j] = 0
      left  = removeIsland(matrix, i, j - 1)     
    }
    if(j + 1 < matrix[0].length) {
      matrix[i][j] = 0
      right = removeIsland(matrix, i, j + 1)      
    }
    if(i - 1 >= 0) {
       matrix[i][j] = 0
       up   = removeIsland(matrix, i - 1, j)     
    }
  }
}

// Do not edit the line below.
exports.removeIslands = removeIslands;

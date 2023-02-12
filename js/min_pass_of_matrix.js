function minimumPassesOfMatrix(matrix) {
  // Write your code here.
  let queue = []
  for (i = 0; i < matrix.length; i++) {
    for(j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] > 0 ) {
        queue.push([i,j])
      }
    }
  }
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  let nextPassQueue = queue;
  let counter = 0;

  while(nextPassQueue.length > 0) {
    const currentPassQueue = nextPassQueue;

    nextPassQueue = []
    while(currentPassQueue.length > 0) {
      let   [i, j] = currentPassQueue.shift();
      if(i-1 >= 0 && matrix[i-1][j] < 0) {
        matrix[i-1][j] = -1 * matrix[i-1][j]
        nextPassQueue.push([i-1, j])
      }
      if(j-1 >= 0 && matrix[i][j-1] < 0) {
        matrix[i][j-1] = -1 * matrix[i][j-1]
        nextPassQueue.push([i, j-1])
      }
      if(i+1 < rowLength && matrix[i+1][j] < 0) {
        matrix[i+1][j] = -1 * matrix[i+1][j]
        nextPassQueue.push([i+1,j])
      }
      if(j+1 < colLength && matrix[i][j+1] < 0) {
        matrix[i][j+1] = -1 * matrix[i][j+1]
        nextPassQueue.push([i,j+1])
      }
    }
    counter++
  }

  for (i = 0; i < matrix.length; i++) {
    for(j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] < 0 ) {
        return -1
      }
    }
  }

  return --counter;
}

// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;

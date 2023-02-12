function taskAssignment(k, tasks) {
  for(let i = 0; i< tasks.length; i++) {
    tasks[i] = [i, tasks[i]]
  }
  tasks = tasks.sort((a, b) => a[1] - b[1]);

  let longestPointer = tasks.length -1;
  let shortesPointer = 0
  const pairs = []

  while(shortesPointer<longestPointer) {
    pairs.push([tasks[shortesPointer][0], tasks[longestPointer][0]])
    shortesPointer++
    longestPointer--
  }

  return pairs;
}

// Do not edit the line below.
exports.taskAssignment = taskAssignment;

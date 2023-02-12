function cycleInGraph(edges) {
  for(let i = 0; i< edges.length; i++) {
    let target = [i];
    for(const curVertex of edges[i]) {
      const cycle = transverseGraph(target, curVertex, edges);
      if(cycle) return true;
      target = [i]
    }
  }
  return false
}

function transverseGraph(target, curVertex, edges) {
  if(target.includes(curVertex)) {
    return true;
  }
  if(curVertex == []) {
    return false;
  }
  target.push(curVertex)
  for(const nextVertex of edges[curVertex]) {
    return transverseGraph(target, nextVertex, edges);
  }
}

exports.cycleInGraph = cycleInGraph;

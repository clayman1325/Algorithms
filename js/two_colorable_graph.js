function twoColorable(edges) {
  const vertexColor = {};

  vertexColor[0] = "b";

  for(let i = 0; i < edges.length; i++) {
    for(let j = 0; j < edges[i].length; j++) {
      const sibbling = edges[i][j];
      if (vertexColor[sibbling]) {
        if(vertexColor[i] == null) {
          vertexColor[i] = nextColor(vertexColor[sibbling]);
        }
        if(vertexColor[sibbling] != nextColor(vertexColor[i])) {
          return false;
        }
      } else {
        vertexColor[sibbling] = nextColor(vertexColor[i])
      }
    }
  }

  return true;
}

function nextColor(currentColor) {
  return (currentColor == "b") ? "w" : "b"
}

// Do not edit the line below.
exports.twoColorable = twoColorable;

var isBipartite = function(graph) {
    const adjMatrix = createAdjMatrix(graph);
    const visited = new Array(graph.length).fill(false);
    let setA = new Set();
    let setB = new Set();

    for(let i = 0; i < graph.length; i++) {
        if(!visited[i]) {
            if(i == 0) {
                setA.add(0);
            } else {
                setB.add(i);
            }
            visited[i] = true;
            const valid =  dfs(adjMatrix, i, setA, setB, visited);
            if(!valid) return false
        }
    }
    return true;
}

function dfs(adjMatrix, i, setA, setB, visited) {
    const nodes = adjMatrix[i];
    const curSet = setA.has(i) ? setB : setA;

    let result = true;
    for(let i = 0; i < nodes.length; i++) {
        const curNode = nodes[i];
        if(!visited[curNode]) {
            visited[curNode] = true;
            curSet.add(curNode);
            result = dfs(adjMatrix, curNode, setA, setB, visited)
        } else {
            if(!curSet.has(curNode)) return false;
        }
    }

    return result;
}


function createAdjMatrix(graph) {
    let matrix = {};
    for(let i = 0; i < graph.length; i++) {
        matrix[i] = graph[i]
    }
    return matrix;
}
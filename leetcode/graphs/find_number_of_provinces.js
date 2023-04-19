    let result = 0;
    let visited = [];

    for(let i = 0; i < isConnected.length; i++){
        if(!visited[i] == true) {
            const loop = dfs(isConnected, i, visited, false);
            result++;
        }
    }

    return result;
};

const dfs = function(graph, element, visited, loop) {
    visited[element] = true;

    for(let i=0; i < graph.length; i++) {
        if(!visited[i] == true && graph[element][i] == 1) {
            loop = dfs(graph, i, visited, true);
        }
    }

    return loop;
}
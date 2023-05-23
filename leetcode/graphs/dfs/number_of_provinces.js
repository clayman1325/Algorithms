var findCircleNum = function(isConnected) {
    let visited = new Array(isConnected.length).fill(false);
    const matrix = adjMatrix(isConnected);
    let provinces = [];

    for(let i = 0; i < isConnected.length; i++) {
       const province = [];
       if(!visited[i]) {
           visited[i] = true;
           province.push(i)
           dfs(matrix, i, visited, province);
       }
       if(province.length > 0) provinces.push(province);
    }

   return provinces.length;
}

function dfs(matrix, city, visited, province) {
   const cities = matrix[city];
   for(let i = 0; i < cities.length; i++) {
        const curCity = i;
        if(!visited[i] && cities[i] == 1) {
            visited[i] = true;
            province.push(i)
            dfs(matrix, i, visited, province)
        }
    }
}

function adjMatrix(isConnected) {
   let matrix = {};
   for(let i = 0; i < isConnected.length; i++) {
       matrix[i] = isConnected[i];
   }
   return matrix
}
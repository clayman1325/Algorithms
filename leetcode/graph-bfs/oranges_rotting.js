var orangesRotting = function(grid) {
    const rLimit = grid.length;
    const cLimit = grid.length;
    let time = 0;
    let q = [];
    let fresOrangesCount = initializeRoranges(grid, q);

    if(fresOrangesCount < 1) return 0

    while(q.length > 0 && fresOrangesCount > 0) {
        // console.log(q)
        for(let i = 0; i < q.length; i++) {
            const curRorange = q.shift()
            fresOrangesCount = rottenOranges(grid, curRorange, q, fresOrangesCount, rLimit, cLimit);
        }
        time++
    }
    console.log(grid)
    return checkIslandOrange(grid) ? -1 : time;
}
function rottenOranges(grid, rOrange, q, fresOrangesCount, rLimit, cLimit) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];

    for(const [dirX, dirY] of directions) {
        const nextX = dirX + rOrange[0];
        const nextY = dirY + rOrange[1];
        if(
           nextX >= 0 && nextX < rLimit && nextY >= 0 && nextY <  cLimit &&
           grid[dirX + rOrange[0]][dirY + rOrange[1]] == 1
        ) {
            grid[nextX][nextY] = 2;
            q.push([nextX, nextY]);
            fresOrangesCount--;
        }
    }

    return fresOrangesCount;
}

function initializeRoranges(grid, q) {
    let freshOranges = 0;
    for(let i = 0; i <grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 2 ) q.push([i, j]);
            if(grid[i][j] == 1 ) freshOranges++;
        }
    }
    return freshOranges
}


function  checkIslandOrange(grid) {
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1 ) return true
        }
    }
    return false;
}
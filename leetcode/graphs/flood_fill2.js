var floodFill2 = function(image, sr, sc, color) {
    const startingColor = image[sr][sc];

    if(startingColor == color) return image;

    const directions = [[1,0], [0,1], [-1,0], [0,-1]];
    const rLimit = image.length - 1;
    const cLimit = image[0].length - 1;
    let q = [[sr, sc]];
    image[sr][sc] = color;


    while(q.length > 0) {
        const curCell = q.shift();
        sr = curCell[0];
        sc = curCell[1];

        for(let dir = 0; dir < directions.length; dir++) {
            const curDir = directions[dir];
            const newR = sr + curDir[0];
            const newC = sc + curDir[1];

            if(
                newR >= 0 && newR <= rLimit && newC >= 0 && newC <= cLimit &&
                image[newR][newC] == startingColor
            ) {
                q.push([newR, newC])
                image[newR][newC] = color
            }
        }
    }
    return image;
};

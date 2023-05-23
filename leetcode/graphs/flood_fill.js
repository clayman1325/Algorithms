var floodFill = function(image, sr, sc, color) {
    const startingColor = image[sr][sc];

    if(startingColor == color) return image;

    const directions = [[1,0], [0,1], [-1,0], [0,-1]];
    const rLimit = image.length - 1;
    const cLimit = image[0].length - 1;
    image[sr][sc] = color;

    recFill(image, sr,sc, rLimit, cLimit, directions, startingColor, color)

    return image;
}
function recFill(image, sr,sc, rLimit, cLimit, directions, startingColor, color) {
    for(let i = 0; i < directions.length; i++) {
        const newSr = sr + directions[i][0];
        const newSc = sc + directions[i][1];

        if(
            newSr >= 0 && newSr <= rLimit && newSc <= cLimit && newSc >= 0 &&
            image[newSr][newSc] == startingColor
        ) {
            image[newSr][newSc] = color
            recFill(image, newSr, newSc, rLimit, cLimit, directions, startingColor, color)
        }
    }
}
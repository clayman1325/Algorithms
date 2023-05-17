var findMinArrowShots2 = function(points) {
    points = points.sort((a,b) => a[0] - b[0]);

    let overlaping = [];
    let i = 0;
    console.log(points)
    while(points.length > 1) {
        if(points[i][1] >= points[i+1][0]) {
            if(points[i][1] >= points[i+1][1]){
                points[i+1][0] = Math.max(points[i][0], points[i+1][0]);
                points[i+1][1] = Math.min(points[i][1], points[i+1][1])
            } else {
                points[i+1] = points[i];
            }
            points.shift()
        } else {
            overlaping.push(points.shift());
        }
    }
    console.log(overlaping, points)
    return overlaping.length + points.length;
};
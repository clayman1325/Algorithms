var findMinArrowShots = function(points) {
    points = points.sort((a,b) => a[0] - b[0]);
    let left = 0;
    let right = 1;
    let count = 1;

    while(right < points.length) {
        if(points[left][1] < points[right][0]) {
            count++;
            left = right;
        } else if(points[left][1] >= points[right][1]) {
            left = right;
        }
        right++
    }
    return count;
}
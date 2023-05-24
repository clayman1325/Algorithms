var uniquePaths = function(m, n) {
    let total = [];

    recSearch(m - 1, n - 1, total);

    return  total.reduce((accu, val) => accu += val, 0);;
};

function recSearch(m, n, total) {
    if(n == 0 && m == 0) {
        total.push(1);
        return;
    }

    if(n < 0 || m < 0 ) return

    if(m - 1 >= 0) recSearch(m - 1, n + 0, total)
    if(n - 1 >= 0) recSearch(m + 0, n - 1, total)
}

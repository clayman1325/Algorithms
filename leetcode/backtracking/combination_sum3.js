var combinationSum3 = function(k, n) {
    let total = []
    rec(k,n, 1, 0, [], total)
    return total;
};

function rec(k,n, num, cur, array, total) {
    if(array.length == k && cur == n) total.push(array);
    if(array.length > k || cur > n)   return

    for(let m = num; m <= 9; m++) {
        rec(k, n, m + 1, cur + m, array.concat([m]), total)
    }
}
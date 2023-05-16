var guessNumber2 = function(n) {
    var low = 1;
    var high = n;
    while (low <= high) {
        var mid = Math.ceil(low + (high - low) / 2);
        var res = guess(mid)
        if (res == 0) return mid;
        else if (res < 0) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
};

var guessNumber = function(n) {
    return findNumber(0, n);
};
const findNumber = (start, end) => {
    const mid = Math.floor((end + start)/2);

    if (guess(mid) === 0) return mid;
    if (guess(mid) === -1) return findNumber(start, mid - 1);
    if (guess(mid) === 1) return findNumber(mid + 1, end);
}
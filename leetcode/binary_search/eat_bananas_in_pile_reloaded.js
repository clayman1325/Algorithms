function minEatingSpeed(piles, h) {
    let left = 1; // minimum 1 banana should be eaten per hour, otherwise no progress
    let right = Math.max(...piles); // at max, max(piles) bananas are required to be eaten per hour
    let mid = Math.floor((left + right) / 2); // mid will be the speed of eating
    let k = Infinity;

    // Binary Search
    while(left <= right) {
        let sum = 0; // sum is the total time required to finish all bananas at speed of mid

        for(let i = 0; i < piles.length; i++) {
            sum = sum + Math.ceil(piles[i] / mid);
        }

        if(sum <= h) {
            k = Math.min(k, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    return k;
};
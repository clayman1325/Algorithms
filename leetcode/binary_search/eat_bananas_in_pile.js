var minEatingSpeed2 = function(piles, h) {
    const maxPile = Math.max(...piles);
    let left = 0;
    let right = maxPile;
    let k = Math.floor((right - left) / 2);
    let finish = 1;
    let min = right;

    while(left < right) {
        finish = eatPiles([...piles], k, h * 1)

        if(finish == 0) min = Math.min(min, k);
        if(finish <= 0) {
            k += Math.ceil((right - k) / 2);
            left++
        } else {
            k -= Math.ceil((k - left) / 2);
            right--
        }
    }

    return min;
};
const eatPiles = function(piles, k, h) {
    for(let i = 0; i < piles.length; i++){
        while(piles[i] > 0) {
            piles[i] = Math.ceil(piles[i] - k)
            h -= 1;
            if(h < 0) return -1;
        }
    }
    return h == 0 ? 0 : 1;
}
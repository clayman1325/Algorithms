var canPlaceFlowers = function(flowerbed, n) {
    if(n == 0) return true;
    if(flowerbed.length == 1 &&  flowerbed[0] == 0 && n == 1) return true;
    for(let i = 0; i < flowerbed.length; i++) {
        if(
            i == 0 && flowerbed[i+1] == 0 && flowerbed[i] == 0 ||
            i == flowerbed.length - 1 && flowerbed[i-1] == 0 && flowerbed[i] == 0 ||
            flowerbed[i-1] == 0 && flowerbed[i+1] == 0 && flowerbed[i] == 0
        ) {
            flowerbed[i] = 1;
            n--
        }

        if(n == 0) return true;
    }
    return false;
};
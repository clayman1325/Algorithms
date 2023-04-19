var coinChange = function(coins, amount) {
    let minCoins = new Array(amount + 1).fill(10000);
    minCoins[0] = 0;
    for(let i = 0; i < coins.length; i++){
        for(let j =  0; j < minCoins.length; j++){
            if(coins[i] <= j){
                minCoins[j] = Math.min(minCoins[j], 1 + minCoins[j-coins[i]]);
            }
        }
    };

    return minCoins[amount]!= 10000 ? minCoins[amount] : -1;
};
function minNumberOfCoinsForChange(n, denoms) {
  const numofCoins = new Array(n + 1).fill(10000);
  numofCoins[0] = 0;

  for(let i = 0; i < denoms.length; i++) {
    for(let j = 0; j < numofCoins.length; j++ ) {
      if (denoms[i] <= j) {
        numofCoins[j] = Math.min(numofCoins[j], 1 + numofCoins[j - denoms[i]])
      }
    }
  }

  return numofCoins[n] != 10000 ? numofCoins[n] : -1
}

exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;

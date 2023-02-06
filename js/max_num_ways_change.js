function numberOfWaysToMakeChange(n, denoms) {
  const waysOfMakeChange = [];

  for(let i = 0; i <= n; i++) {
    waysOfMakeChange[i] = 0
  }
  
  waysOfMakeChange[0] = 1;
  
  for(let denom of denoms){
    for(let amount = 1; amount < n + 1; amount++) {
      if(denom <= amount) {
        waysOfMakeChange[amount] += waysOfMakeChange[amount - denom]
      }
    }
  }

  return waysOfMakeChange[n];
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
 
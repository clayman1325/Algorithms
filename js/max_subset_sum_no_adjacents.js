function numberOfWaysToMakeChange(n, denoms) {
  count = 0;
  for(let i = denoms.length - 1; i >= 0; i--){
    if(denoms[i] > n) { denoms.splice(i,1) }
  }
 
  for(let i = 0; i < denoms.length; i++){
    currentValue = denoms[i];
    while(currentValue < n){
      currentValue += denoms[i]
    }
    if (currentValue == n) { count++}
  }
  return count
}

exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;

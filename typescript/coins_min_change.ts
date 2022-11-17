export function nonConstructibleChange(coins: number[]) {
    const coinsSorted: number[] = coins.sort(function(a: number, b: number){return a - b});
    if (coinsSorted[0] != 1) return 1
    
    let change: number = coinsSorted[0]
    
    for(let i: number = 0; i < coinsSorted.length -1; i++) {
      if (coinsSorted[i+1] > change + 1){
        return (change + 1);
      } else {
        change += coinsSorted[i+1]
      }
    }
    return change + 1
  }
  
  
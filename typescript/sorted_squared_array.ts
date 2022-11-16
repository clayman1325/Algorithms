export function sortedSquaredArray(array: number[]) {
    let result: number[] = [];
    for (let i:number = 0; i < array.length; i++) {
       result = result.concat(array[i] * array[i])
    } 
  
    return result.sort( function(a, b) { return a - b });;
  }
  
type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const triplets: Triplet[] = []
  let sum = 0
  
  array = array.sort((a,b) => {
    return a - b
  })

  for(let i: number = 0; i < array.length - 2; i++){
    let left:  number = i + 1;
    let right: number = array.length - 1;

    while((left < right)){
      sum = array[i] + array[left] + array[right]
      
      if (sum == targetSum){
          const triplet: Triplet = [array[i], array[left], array[right]];
          triplets.push(triplet);
      }
      
      if(sum > targetSum){
        right -= 1;
      } else {
        left += 1;
      }
    }
  }
  
  return triplets;
}
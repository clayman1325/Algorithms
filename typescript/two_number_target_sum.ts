function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++ ) {
      let num: number = array[i]
      for (let j = i + 1; j < array.length; j++) {
        if ((num + array[j]) == targetSum) {
          return [num, array[j]]
        }
      }
    }
    
    return []
  }
  
  // pseudo code:
  
  
  // for i = 0 i < targetSum.length i ++ 
  //   num = array[i]
  //   for j = i + 1  j < targetSum.length j ++ 
  //       if (num + array[j]) == targetSum)
  //         return [num, array[j]]
  //   end
  // end
  
  // return []
  
  
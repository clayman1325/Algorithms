export function twoNumberSum(array: number[], targetSum: number) {
    const targets: any = {}
    for (let i = 0; i < array.length - 1; i++ ) {    
      let result: number = targetSum - array[i]
      targets[`${result}`] = array[i]
    }
    
    for (let i = 0; i < array.length - 1; i++ ) {    
      let scan: number = targets[`${array[i+1]}`]
      if (scan && scan != array[i+1]) {
        return [scan, array[i+1]]
      }
    }
    return []
  }
  
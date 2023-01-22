function zeroSumSubarray(nums) {
  let partialSum = 0
 
  for(let i = 0; i<nums.length; i++) {
    partialSum = nums[i];645PM

    if(partialSum == 0) { return true }

    for(let j = i+1; j < nums.length; j++) {
      partialSum += nums[j];
      
      if(partialSum == 0) return true
    }
  }
  return false;
}
